---
title: "How and When to Write a Requirements Document"
description: "What to consider before sitting down to write the \"requirements document.\""
pubDate: 2020-04-09
topic: "Project Management Nuts and Bolts"
---

A common perception is that projects need a "requirements document", but it's not always clear what that means, or what a requirements document should include. What if you're trying to be "Agile"? Doesn't that mean you don't need a requirements document in the first place? Is a requirements document a "contract" that must be followed to the letter? What happens if requirements change after it's written?

These are good questions, and they point to the fact that requirements documents are anything but foolproof. In the wrong circumstances, and used the wrong way, a requirements document can hurt more than it helps. However, in the right circumstances, and used in a sensible way, a requirements document can be useful. How do we make the distinction?

The most common problem with a requirements document is that it *promotes the wrong behavior and the wrong way of thinking about requirements*. That's right. We often confuse the issue because we think a requirements document is about "documentation", which seems necessary. However, there's more to it.

First of all, it's not really that practical to put *all* the requirements for a project into a single document. I know that doesn't stop people from trying; I'm just saying it's not that practical. The reason is because good requirements typically consist of *many* different artifacts. On a typical project you may need wireframes, copy decks, spreadsheets of tabular data, architecture diagrams, workflow diagrams, checklists, test scripts, and other forms of specialized documentation to capture *all *the requirements, especially the more detailed ones. If I use one, I find it is more practical to keep a requirements document to"high level" requirements, and supplement it with supporting artifacts as needed.

As soon as you decide to put things into a document, however, you need to be wary of a much bigger problem. That is the danger of a requirement documents being used as a substitute for *conversation*, *collaboration*, and *participation*. This will almost always set up a project for problems.

If you rely on written documentation as your sole means of distributing requirements, you will invariably end up with various interpretations of what they mean. This will be true even if you pour endless hours into writing super-detailed requirements; a short conversation will always beat it when it comes to getting people on the same page. There will almost always be questions, or things that people did not quite understand. There will be things that people overlooked or didn't read, which can be called out in conversation. How many people do you know thoroughly read instruction manuals? I think it's a similar number that thoroughly read requirements documents--i.e. less than ideal.

Furthermore, requirements are a team *effort*, not the sole responsibility of a single person deemed to be the writer of the "requirements document". You need the Product Owner to define priorities; stakeholders and subject matter experts to explain how the business rules should work; project managers and business analysts to identify dependencies; developers to estimate, vet solutions for feasibility, and give technical recommendations; UX designers to identify user interface considerations; testers to point out data needs and edge case scenarios; and so on and so forth.

The moral of the story is a requirements document does not mean that one person comes up with the requirements and documents them for everybody else to read and execute. Creating requirements is a team sport. The document is just a form of *written memory *of what was discussed and what the team came up with, and in that sense, can function as a useful reference.

Finally, we must be careful of thinking that things are "set in stone" once we write them down. Again, this is not what the requirements document is for. A requirements document must typically be refined and revised many times because requirements change, are refined, and emerge over time. Keeping a requirements document means committing to updating and versioning that document as necessary. A requirements document may ironically facilitate more revisions and changes. This is because every time we re-read the document, it is not unusual to identify some small detail we missed, or to have a new thought that impels us to take the requirements in a new or slightly different direction (this is not always a bad thing).

Given the above challenges, however, it is no mystery why some prefer to dispense with a requirements document altogether. And the truth is, you may be able to get on fine without one.

As I explained in [A Short Guide to Writing Software Requirements](https://www.pjsrivastava.com/a-short-guide-to-writing-software-requirements), I recommend User Stories as the starting point for requirements. You can put User Stories into a "document", but you don't have to. You can just as well put User Stories on note cards, or into one of the many Agile software programs now available. This is often better than a document. Note cards can be easily moved around or re-organized. Software programs allow you to add attachments, make easy edits, drag and drop user stories into iterations, add tasks directly to stories, and so on. This can be a lot more effective and productive than keeping up a document which takes special effort to format, edit, and re-distribute over and over.

So why use a document? It makes sense if it is the only *practical* alternative. There are times when it is, due to circumstance. For example:

- You may be given no budget or authorization to buy or subscribe to a good software program
- The requirements have to be reviewed by stakeholders who are remote or not available to be closely involved with the project team.
- You have a client/vendor relationship with the stakeholders, and documentation is necessary for accounting purposes.
- You have an internal "sign off" process that requires documentation to review.
- Awareness of the context surrounding the project is uneven, due to not everyone being in the loop or in the same conversations.

These are not ideal situations, but they happen. Improve on things where you can. First, try to "nip in the bud" the behavioral problems I discussed above with a requirements document. Focus on collaboration, discussion, and understanding that requirements tend to emerge over time and are a work in progress.

Try to further gain acceptance for requirements being a *collection* of artifacts rather than a single one. This is far preferable than trying to insert many different artifacts and independent files into a single document. You will spend more time struggling to assemble and update the requirements document this way than you will actually getting any work done. For very simple projects, the best way to express the requirements might be in an alternative format, such as a wireframe, protoype, or diagram, negating the need for a "document" altogether. The most important question is "do we understand what it is we need to do?", vs "do we have a requirements document that looks a certain way".

Assuming a more complex project, and the need for User Stories, I often prefer to maintain them in a spreadsheet, which allows for easy updating. I can insert, delete, and re-order rows in the spreadsheet to make updating Conditions of Satisfaction easier. To re-order User Stories, I can put them on different tabs and then drag and drop the order. Then when I'm ready to produce the final document, I copy the tables from the spreadsheet and insert them. It is the most manageable way I've found to document User Stories if I need to use conventional tools such as Microsoft Word and Excel. The result looks like this:
