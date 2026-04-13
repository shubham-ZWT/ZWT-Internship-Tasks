import "dotenv/config";
import { Worker } from "bullmq";
import type { Job } from "bullmq";
import { transporter } from "../lib/mailer";
import { welcomeEmailTemplate } from "../lib/templates/welcome";
import { redis } from "../lib/redis";

interface WelcomeEmailJobData {
  email: string;
  name: string;
}

const emailWorker = new Worker(
  "email",
  async (job: Job<WelcomeEmailJobData>) => {
    if (job.name === "welcome-email") {
      const { email, name } = job.data;
      const template = welcomeEmailTemplate(name ?? "there");

      await transporter.sendMail({
        from: process.env.MAIL_FROM,
        to: email,
        subject: template.subject,
        html: template.html,
      });

      console.log(`Welcome email sent to ${email}`);
      return { sent: true, to: email };
    }
    if (job.name === "password-reset-email") {
      // here password reset email logic would go, i.e one worker can handle multiple job types
      console.log(`Password reset email job received for ${job.data.email}`);
      return { sent: true, to: job.data.email };
    }
  },
  {
    connection: redis, // here between workers and the queues Redis act as a messsage broker which allows them to communicate, you can also specify Redis connection options here if needed
    concurrency: 5, // concurrent defines how many jobs the worker can process in parallel
  },
);

emailWorker.on("completed", (job) => {
  console.log(`[email-worker] Job ${job.id} (${job.name}) completed`);
});

emailWorker.on("failed", (job, err) => {
  console.error(`[email-worker] Job ${job?.id} failed:`, err.message);
});

console.log("Email worker started, waiting for jobs...");
