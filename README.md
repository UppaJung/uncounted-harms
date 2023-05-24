# The Invisible Harms of Security Tech

The technology industry presents security as a tradeoff between harm and *inconvenience*. This framing implies that nobody is truly harmed when security backfires; that more security is always better; and that those unwilling to adopt ever-stricter security are irresponsible.

Yet, encryption, authentication, and other security technologies do backfire, and when they do the harms can be devastating and irreparable. We can lose decades of records, photos, correspondence, contacts, and other precious digital assets if locked out of an online account. We can be put in dangerous situations, such as when our phone's security features lock us out of navigation while we are driving on the highway, demanding that we take action to unlock it.[^locked-navigation]  As we become every more reliant on technology, losing access to it even briefly can cause harm; imagine being unable to access medical data before emergency treatment, from being blocked from reaching out to those you trust when you need them most, or from unreachable by others when they need you most. 

<!-- Losses:
Lost human connection and relationships -->

Though nearly all of us have suffered harm when security technologies backfire, the aggregate harm – surely including many millions of lifetimes of lost memories, lost records, lost work, lost opportunities, and severed relationships – is almost entirely invisible to society. Since losses occur one person at a time, few incidents are large enough to be newsworthy.[^cryptocurrency] Most of us don't report or speak up when the security measures meant to protect us backfires because we blame ourselves. While companies are required to report when security fails to keep attackers out, they are not required to report when security fails to let us in. So, when we hear about security failures, we only hear about breaches, ransomware, and other stories that reinforce the narrative that more security is always better.

History tells us that immense harm can hide in plain site under similar conditions. For example, at the start of the industrial revolution, occupational deaths and injuries were extremely common, but were rarely reported and thus went uncounted. The technological industrialists of the time blamed these ‘accidents‘ on the victims (workers), employers were not required to report them, and the media did not consider the individual deaths newsworthy. The deaths and injuries resulting from automotive crashes were also initially unreported and uncounted. The technological industrialists of the time blamed these harms everyone but the cars they produced: initially drivers, until the bogeyman of the jaywalker was invented.[^no-accidents]

Perhaps the best analog for security tech that of medicines. We are able to acknowledge both that medicines save lives and can also kill. They are often-essential and yet potentially hazardous. Hence, we test medicine before making it widely available, require side effects are tracked during and after testing, require certain medications be accessible only with a doctor's prescription, and disclose side effects to those prescribing and using them. No such requirements exist for security technologies.

Because the harms of security breaches are visible and backfires invisible, the designers of tech products may under-protect against security backfiring and overprotect against the harms that they will be required to report and be blamed. They will make our digital locks less forgiving than we might choose were we able to know the actual tradeoffs involved.

For example, Apple designed their KeyChain to [permanently lock out users after ten incorrect guesses of their iCloud security code](https://support.apple.com/guide/security/escrow-security-for-icloud-keychain-sec3e341e75d/1/web/1). This design allows Apple to promise that even their engineers cannot access the data, even under government order. Such design decision can make sense for high-risk users like journalists, or citizens worried about government surveillance, but may be the wrong design choice for others. Whereas Apple would be required to disclose if the data were breached, they don't publish the number of user accounts that become permanently locked out.

Similarly, 1Password encrypts each of their users' online data with both that user's master password and an encryption key stored on every device the user has installed 1Password, which the user can also print as part of an emergency kit. If a user loses the devices on which 1Password is installed and didn't print an emergency kit, their data is permanently lost. To have a reputation for the best security, 1Password made a design decision that increases the chance of permanent data loss. They do not track or publish how often such loss happens. They don't even track the fraction of users who print an emergency kit.

End-to-end encrypted messaging apps like Signal and WhatsApp often fail to sync data for reasons that are often impossible to comprehend, such as if a device is offline for a period of time. Signal does disclose that “For your security, chat history isn't transferred to new linked devices.” Upgrading one's phone requires causes one to lose access to years of chat history from that device. Loss occurs by design, but the consequences of that design choice are not measured.

Even experts can only guess at the scale of harms and data lost because they go unreported and uncounted. We can at best infer the scale is vast because, anecdotally, stories of loss are sadly ubiquitous when one starts asking.

To address the harms when security technologies like these backfire, we must treat these hazards like other hazards: We must ensure they are reported and counted. We need researchers to measure the prevalence of harms and their impact, and aggregate those losses over the affected populations. We need investigators to continue to track losses longitudinally (over time) even though such research is harder to fund, publish, and attract media attention to, than research that identifies security vulnerabilities. We should demand that tech companies track and report the harms when security backfires, as they are required to do when security is breached. We might even want to require certain classes of security tech to be independently tested before deployment as we do for medicines other hazardous products.


[^locked-navigation]: This example is not hypothetical or dated. The security features in my 2023 phone have silently removed the Google Maps app's access to my location while it was navigating me on a highway, and locked the app entirely during other drives. This backfire occurred even though the navigation app (Google Maps), and car integration system (Android Auto) were all made by the same organization as the phone's operating system (Google's Android), which are presumably tested to work together.

[^cryptocurrency]: Notable exceptions are when cryptocurrency holders lose the keys to millions of dollars in assets.


[^no-accidents]: For a history of deaths and injuries from industrial work and automotive crashes were once uncounted and invisible, I recommend [Jessie Singer](https://jessiesinger.com/)'s 2022 book [“There Are No Accidents”](https://www.simonandschuster.com/books/There-Are-No-Accidents/Jessie-Singer/9781797139241).