# Security is a Hazardous Product

Security is not an inconvenience. It causes HARM.
Most everyone who uses technology is harmed and losses are everywhere.

1. Society is increasingly recognizing the technology products are hazardous, in part because of security risks.



1. Security products escape scrutiny for much the same reason as medicine once did: people were so desperate for cures that they assumed the risk of side effects.

### Key points

- Computing devices and online services are hazardous products.
- Security technologies are themselves hazardous products. Like medicines, there is dangerous pressure to ignore their potential harms because we need them to remediate other harms. But every security safeguard has potential harm.
- Until we recognize loss (deletion, temporary and permanent denial of access) as a harm to be tracked, problems will be under-reported and unaddressed

Loss is undervalued because
- No adversary to raise scare of
- Falsely perceived as in our control
- Occurs one person at a time (embarrassing)
- Losses are hard to quantify in meaningful terms (how much is a month of photos worth?)

Contrast that with breaches, which has evil villains, is outside our control, occurs in mass, and often has dollar outcomes. Oh, and we have breach reporting requirements.



We are over-focused on breaches because they are (1) big and (2) reported.  Losses happen one at a time.  Most of us have lost data. (I"ve lost email history when my university email account was closed without warning, a Google Account for my daughter, at least one Microsoft account. I lost photos when locked out of a phone before I could back them up.  My music collection.)


"At the end of the day, it's a free account"

Since people do pay for add-ons like more storage, what they actually mean is "At the end of the day, the potential loss to us is too small for us to care about."

Hazardous products. (if the risks aren't known, they can't be required to disclose them.)

But unlike deaths from medicines, these losses aren't reported.  (Much like industrial accidents once were not reported.)

There's nothing we can do about the nut behind the wheel has been replaced with "there's nothing we can do about the nut behind the keyboard."

Deploying FIDO tokens to the home because they work in the enterprise is like deploying IV bags to the home because they work in the hospital, dispensing medication even when the patient is left alone in their room.

Google, Apple, & Microsoft, don't report accidents (loss).
Nor do social networks.
Password managers don't report accidents.
TOTP companies (authy) don't report accidents
Companies that make 
End-to-end encryption is making it worse (even though reporting is possible)

Temporary losses (no access when immediately needed) and permanent loss.  The former sounds harmless, but it may not be (needing your passport photo, emergency medical information, an important presentation)

Our industry invents endless jargon to warn of attacks (spear phishing, credential stuffing, ) and justify deploying new security technologies, but we have no common language about their harm.

The only required accidents reported are breaches.

Termination
   (0) logins/use stops, no request to recovery

Loss:
   (0) logins stop
   (1) there are 1 or more requests to recover, none of which succeed

Theft:
   (0) there is a request to recover
   (1) logins continue
   (2) request to recover is escalated to human



Account recovery requests must be reported.
   (0) total requests to recovery account
   (1) the number that complete (the requestor is given access to the account and re-establishes use)
   (2) the number that half-complete (the requestor is offered access but re-establishment not complete within N days)
   (3) the number that believed fraudulent
   (4) the number that are inconclusive, but the account is not activated again within N days
   (5) the number that complete, but with data loss (e.g., losing E2E data)
   (1) number reported invalid by someone able to access the account

   (x) Known compromises.