import React from "react";
import Card from "../Shared/Card";
import Badge from "../shared/Badge";
import Button from "../shared/Button";

export default function GenericEmployee({
  name,
  email,
  status,
  btnText,
  viewDetails,
}) {
  return (
    <div className="generic-employee-card">
      <Card title={name}>
        <p>Email :{email}</p>
        <Badge text={status} color={status === "Active" ? "green" : "red"} />
        <br />
        <Button text={btnText} onClick={viewDetails} />
      </Card>
    </div>
  );
}
