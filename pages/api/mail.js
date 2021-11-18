import mail from "@sendgrid/mail";

mail.setApiKey(process.env.SENDGRID_API_KEY);

const getMails = async (req, res) => {
    const body = JSON.parse(req.body);
    const msg =
        "Name: " +
        body.name +
        "\r\n" +
        "Email: " +
        body.email +
        "\r\n" +
        "Message: " +
        body.msg +
        "\r\n";

    const data = {
        to: "kontakt@fensterblatt.digital",
        from: "formular@fensterblatt.digital",
        subject: "Anfrage über Kontaktformular",
        text: msg,
        html: msg.replace(/\r\n/g, "<br>"),
    };

    await mail.send(data);

    res.status(200).json({ status: "Ok" });
};

export default getMails;
