from flask import Flask, request, render_template
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import json

app = Flask(__name__)

# Reading email credentials from a JSON configuration file
with open("config.json", "r") as config_file:
    config = json.load(config_file)

EMAIL_USERNAME = config.get('email_username')
EMAIL_PASSWORD = config.get('email_password')

@app.route("/", methods=["GET", "POST"])
def index():
    if request.method == "POST":
        # Getting form data
        first_name = request.form.get("firstName")
        middle_name = request.form.get("middleName")
        last_name = request.form.get("lastName")
        email = request.form.get("email")
        country_name = request.form.get("countrySelect")
        phone = request.form.get("phone")
        message = request.form.get("message")

        # Creating the email message
        subject = "New Form Submission"
        body = (f"First Name: {first_name}\n"
            f"Middle Name: {middle_name}\n"
            f"Last Name: {last_name}\n"
            f"Email: {email}\n"
            f"Country Name: {country_name}\n"
            f"Phone: {phone}\n"
            f"Message: {message}")

        send_email(subject, body)

        return "Form submitted. Thank you!"

    return render_template("portfolio_nev.html")

def send_email(subject, body):
    # Email configuration
    sender_email = EMAIL_USERNAME
    sender_password = EMAIL_PASSWORD
    recipient_email = "nevilleotieno6@gmail.com"

    # Creating the email message
    msg = MIMEMultipart()
    msg["From"] = sender_email
    msg["To"] = recipient_email
    msg["Subject"] = subject
    msg.attach(MIMEText(body, "plain"))

    try:
        # Connecting to the SMTP server (Yahoo, in this case)
        server = smtplib.SMTP("smtp.mail.yahoo.com", 587)
        server.starttls()
        server.login(sender_email, sender_password)

        # Sending the email
        server.sendmail(sender_email, recipient_email, msg.as_string())
        server.quit()

        print("Email sent successfully!")
    except Exception as e:
        print(f"An error occurred: {str(e)}")

if __name__ == "__main__":
    app.run(debug=True)
