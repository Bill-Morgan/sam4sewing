import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';



@NgModule({
  declarations: [];
  imports: [
    CommonModule
  ]
})
export class PostInputsModule { 
    "bcc": string;// Bcc recipients.
    "cc": string;// Cc recipients.
    "date": Date;// The date the email was received by the server.
    "from": string;// From address.
    "selectedFrom": string;// Source of the from address. [alias; domainalias; smtpaccount; plusaddress]
    "priority": enum (see MessagePriorities);
    "replyTo": string;// The reply-to address.
    "subject": string;// The item's subject string.
    "to": string;// To address. [Required]
    "messagePlainstring": string;// A plain string version of the email.
    "messageHTML": string;// An HTML version of the email.
    "markForFollowup": boolean;// If true the email message flag is set.
    "attachmentGuid": string;// The attachment's unique ID.
    "ownerEmailAddress": string;// An identifier for the person sharing the item.
    "folder": string;// The name of the folder.
    "replyUid": number;
    "draftUid": number;
    "actions": // The various email flags settings.
    // This element is a dictionary.
    "key": boolean;
    ...
    ;
    "readReceiptRequested": boolean;// Flag used to determine if a read receipt is needed.
    "deliveryReceiptRequested": boolean;
    "originalCidLinks":
    // This element is a dictionary.
    "key": string;
    ...
    ;
    "excludeFiles": // A list of files that should be excluded from the email.
    [
    number
    ...
    ]
    ;
    "inlineToRemove":
    [
    string
    ...
    ]
    ;
    "attachedMessages": // A list of emails that are being attached to the current email.
    [
    {
    "ownerEmailAddress": string;// The owner's identifier username or email.
    "folder": string;// The name of the folder.
    "uid": number// The unique Id.
    }
    ...
    ]
    
}
