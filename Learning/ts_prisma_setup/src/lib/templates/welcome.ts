export const welcomeEmailTemplate = (name: string) => ({
  subject: "Welcome! Glad to have you.",
  html: `
    <!DOCTYPE html>
    <html>
    <head>
      <style>
        body { font-family: sans-serif; background: #f9f9f9; margin: 0; padding: 0; }
        .container { max-width: 520px; margin: 40px auto; background: #fff; border-radius: 12px; padding: 36px; border: 1px solid #eee; }
        h1 { font-size: 22px; color: #1a1a1a; margin-bottom: 8px; }
        p  { font-size: 15px; color: #555; line-height: 1.6; }
        .btn { display: inline-block; margin-top: 24px; padding: 12px 24px; background: #fdf8f8; color: #fff; border-radius: 8px; text-decoration: none; font-size: 14px; font-weight: 500; }
        .footer { margin-top: 32px; font-size: 12px; color: #aaa; }
      </style>
    </head>
    <body>
      <div class="container">
        <h1>Hey ${name}, welcome!</h1>
        <p>You've successfully signed in with Google. We're glad to have you on board.</p>
        <a class="btn" href="${process.env.APP_URL || "http://localhost:3000/dashboard"}">Go to dashboard</a>
        <div class="footer">You received this because you signed up at our app.</div>
      </div>
    </body>
    </html>
  `,
});
