import com.sendgrid.*;
import com.sendgrid.helpers.mail.Mail;
import com.sendgrid.helpers.mail.objects.*;

import java.io.IOException;

public class SendGridEmailer {

   public static void main(String[] args) throws IOException {

       Email from = new Email("test@example.com");
       Email to = new Email("matthew@<REDACTED>"); // use your own email address here

       String subject = "Sending with Twilio SendGrid is Fun";
       Content content = new Content("text/html", "and <em>easy</em> to do anywhere with <strong>Java</strong>");

       Mail mail = new Mail(from, subject, to, content);

       SendGrid sg = new SendGrid(System.getenv("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"));
       Request request = new Request();

       request.setMethod(Method.POST);
       request.setEndpoint("mail/send");
       request.setBody(mail.build());

       Response response = sg.api(request);

       System.out.println(response.getStatusCode());
       System.out.println(response.getHeaders());
       System.out.println(response.getBody());
   }
}

