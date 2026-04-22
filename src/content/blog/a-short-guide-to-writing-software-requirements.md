---
title: "A Short Guide to Writing Software Requirements"
description: "A pragmatic approach to capturing what a software project needs to do."
pubDate: 2014-03-17
topic: "Project Management Principles"
---

Writing good software requirements takes skill, practice, and patience. The key questions we face are:

- What type of language do we use?
- What level of detail do we need?
- In what form should we document and present the requirements?

When faced with the prospect of writing requirements, many organizations improvise their own methods. The danger, however, is that even small oversights can lead to problems during implementation and execution.

- If a requirement is ambiguous or difficult to read, it may be misinterpreted or not read in its entirety.
- If particular details are missing, it may result in a buggy or haphazard design.
- If business rules are not completely and clearly defined, it may result in missing or improper functionality.
- If it lacks specificity, it will result in something being built that is other than what was intended.

We can guard against these scenarios by following a few solid practices. In this guide I will cover some tried-and-true techniques for creating good requirements, including the following topics:

- Writing User Stories
- Defining Conditions of Satisfaction
- Creating workflow diagrams
- The use of wireframes and visual designs
- Defining nonfunctional requirements
- Creating test tables and test scenarios

To put these into perspective, I will run through an example of how these techniques might be used to define a simple web application.

These techniques are well documented in the software community, and have been time-tested in software shops around the world. This is meant to be a primer for those new to writing requirements, but may also be helpful to those with experience as well. In particular, if you are unfamiliar with Agile methods this will help explain the User Story approach, and will touch on the similarities and differences with the Waterfall method. I will provide links throughout this article for further reading; my goal here is to hit the fundamentals and dispel common misconceptions.

## A Fundamental Principle of Software Requirements

Let’s begin with a fundamental, but often unappreciated principle for complex software projects: *requirements are emergent*.

For any non-trivial project, it’s impossible to imagine the perfect design for something, see every detail, and foresee and account for every technical challenge or situation that might occur along the way.

It’s the process of ongoing discussion and seeing something tangible take shape that helps us think through and draw out all the little details and design tweaks. We may even come up with new ideas and requirements by simply looking at something more than once. Requirements often get defined, refined, added to, and deleted throughout the course of the project, or at whatever point there is something to look at and review.

Of course, it is tidier to plan everything out in detail up front and then simply execute on the plan—which is the “Waterfall” approach. The Waterfall approach works well for projects that are predictable or that follow a repeatable formula; but for projects where the end result is uncertain, it is more difficult. Even with a lengthy and detailed discovery phase requirements are rarely “set in stone”; and even when followed the end result tends to reveal all the things people didn’t anticipate or think about, resulting in a less-than-satisfactory outcome. If changes are required they will require change orders (which everybody hates), or need to be pushed back entirely.

For most situations, the Agile way is easier and produces a better result, so I'll focus on how that works.

In either case, requirements are refined in steps, starting at a high-level, suitable for brainstorming and rough estimation, and ultimately becoming very detailed for implementation and testing.

As we add detail to requirements we need a mix of artifacts to capture them: high level stories to capture the concept and business value; low-level stories to capture individual features; diagrams to map out workflows and business logic; wireframes and visual designs for the user interface and look and feel; spreadsheets and formulas that define possible inputs and expected outputs; and low-fidelity prototypes to react to and make adjustments.

## User Stories in a Nutshell

User Stories provide a good framework for iterating requirements from a high level concept to a high level of detail. Used as the starting point for other artifacts, they are useful for expressing business value and for high-level planning and estimating.

The most common template for writing a User Story is the one popularized by Mike Cohn:

*As a <user type>, I want <some goal> so that <some reason>.*

In other words, we are answering the following questions:

- **Who:** For whose benefit are we doing this?
- **What:** What are we doing?
- **Why:** Why are we doing this?

This is simple, it’s easy to understand, it represents business value, and it doesn’t imply a particular solution or implementation. This is important, because high-level requirements should define the problem, not the solution. User Stories facilitate discussion with team members—technical and non-technical—to help plan and understand a project at its basic level.

I find it helpful to think of user stories at two levels; high-level stories and low-level stories (or sub-stories), which have a parent-child relationship with each other. We can think of building out the requirements as taking a few “passes” to flesh out the stories.

A first pass at iterating the requirements, for example, would be to define high level stories, which describe in broad terms the scope of the application. This level of detail is sufficient for high level release planning and magnitude-of-effort estimates (such as months).

A second pass would be to define the sub-stories that the each high level story is composed of; these would be stories for individual features and components that are implied by the high level story. Including the “why” portion of these sub-stories is often less necessary, but the “who” and “what” pieces are still critical. This level of detail is sufficient for planning iterations and resources, and for rough estimates (such as weeks or days).

The subsequent passes will be to add supporting details to the sub-stories; such as Conditions of Satisfaction, wireframes, test tables, and so forth. This level of detail is what will support tasking out the development and testing effort and allow estimates in hours.

We’ll look at the timing of these activities, and an example of how all this comes together, in a moment.

First, let’s look at the <user type> part of writing a story, because that is important.

## User Typing in a Nutshell

A common mistake in requirements definition is to not account for all the different permutations of a user that may interact with a system. Different user types often have different User Stories, and omitting one may result in an entire feature set not being built.

Without going into great detail, let me throw out a random list of different user types that might be defined, depending on the system:

- New User
- Registered User
- VIP User
- Deactivated User
- Reinstated User
- Administrator
- User with a single account
- User with multiple accounts
- ...and so on.

Naturally, the user types depend on your domain model. The key to keep in mind that different users may require different workflows through a system; and even slight differences in desired business logic between users may significantly affect a system’s architecture or the overall build effort.

The moral is: try to define all the different user types before writing User Stories, as that will help you arrive at the full set of stories.

## Further Reading

Since I’d like to jump into an actual example next, let me provide a few links for reading further about User Stories. Mike Cohn, co-founder of the Scrum Alliance, has written extensively on this topic, so I’ll refer you to his excellent book and website materials:

[User Stories Applied](http://www.amazon.com/gp/product/0321205685/ref=as_li_ss_tl?ie=UTF8&camp=1789&creative=390957&creativeASIN=0321205685&linkCode=as2&tag=pjsri-20) - The book.

[A Quick Explanation of User Stories](http://www.mountaingoatsoftware.com/topics/user-stories)

[Advantages of User Stories](https://www.mountaingoatsoftware.com/articles/advantages-of-user-stories-for-requirements)

[A Presentation on User Stories](http://www.mountaingoatsoftware.com/presentations/119-introduction-to-user-stories)

## Let’s Build a Project

At this point, let’s run through an example of iterating through requirements. Let’s say we want to build a system for a service company so that a user can view their bill online. We might start with:

“As a customer, I can log in and view my bill online so I don't have to wait for a mailed copy.”

That starts the ball rolling. We’re thinking. We’re discussing. But there are questions:

- How do I log in?
- What if I don’t have an online account?
- In what form can I view my bill?

We iterate sub-stories.  The bill part alone could have several:

- “I can view my bill in HTML format”
- “I can view my bill in PDF format”
- “I can view up to my last three bills”

For the login part we might have:

- “As an existing user I can login to my account with my username and password”
- “As a new user I can register for an account by creating a login and providing my contact information”

At this point we might build a workflow diagram to help us think about things more concretely. This may reveal that our “simple” login has a lot of moving parts, for which we need additional stories:

![image asset](/images/blog/a-short-guide-to-writing-software-requirements/image-asset.gif)

Pretty soon we start getting into forgotten username and password stories, validation link stories, etc. Sketching out screens or mocking up a prototype can be similarly helpful in helping us discover and flesh out stories.

Now let’s add detail to our stories—the Conditions of Satisfaction.

The Conditions of Satisfaction are the criteria that must pass for the User Story to be satisfied or “User Accepted”. COS make the story “testable”; this is needed to remove ambiguity over what needs to be implemented.

Writing the User Story might have been easy, but capturing all the Conditions of Satisfaction takes some work. What are some possible Conditions of Satisfaction for the following story?

“As a new user I can register for an account by creating a login and providing my contact information”

Here are a few starters:

- A username must be provided that is between 4 and 20 characters in lengthThe username must be uniqueThe username is case sensitiveThe username can contain only numbers and letters
- A password must be provided that is between 4 and 20 characters in lengthThe password can contain only numbers and lettersThe password must contain at least 1 number and 1 letter
- An email must be providedThe email must be entered in the valid formatThe email must be confirmed via a double entryThe email must not already exist in the system

…and so on. Here are some more examples:

- Validation error messages that should appear if a field entry is missing or invalid
- The storage requirements for any data
- Conditional logic that occurs based on the data entered

Determining all the Conditions of Satisfaction amounts to much of the “heavy lifting” with writing requirements—but this is also what ensures that what gets built is what is intended.

Now when do we do dive into this level of detail? This is where the Waterfall and Agile approaches diverge sharply.

## A Brief Aside: How this Relates to Waterfall vs. Agile

First, let’s recognize that it is a misconception to say that Agile processes don’t capture the same level of detail as a Waterfall process. The truth is that the same level of detail is required in either process to properly build the end result; if anything, Agile techniques encourage greater comprehensiveness.

The key difference is in the timing.

In Waterfall, the plan is to write requirements for the entire project in its required level of detail up front. Consequently, Waterfall projects have a discovery phase lasting weeks or months where business teams do nothing but assemble and refine artifacts. Once the entire application has been built on paper, it then gets sent to the developers to execute on (hopefully with no changes).

Agile, on the other hand, “chunks” the requirements using User Stories, and works story by story. When a story is ready to be worked on, its fine-grain details are fleshed out; it is then developed and tested before moving on to the next story, essentially building the application up one completed piece at a time.

This allows definition and development to happen in parallel, using a cross-functional team:

1. The team breaks a high level story down into low level stories A, B, and C which are accepted into the next iteration;
2. Conditions of Satisfaction, wireframes, and supporting artifacts are fleshed out for Story A;
3. Development begins on Story A; meanwhile detailed requirements are fleshed out for Story B;
4. Story A goes into testing; Story B goes into development; Story C goes into detailed requirements definition;

…and so on. This maximizes speed and efficiency. And if while working on Story A we decide we need to tweak Story B or while working on Story B we discover we’re missing a few things in story C, it’s OK;  because those requirements are being fleshed out as we come to them, and we can accommodate any changes or realizations that happen along the way. And if in the middle of all this it’s decided that Stories D, E, and F need to be rewritten from scratch, the rework is minimal since they only exist as high-level stories at this point. At the end of the iteration, Stories A, B, and C are able to be deployed, if desired.

The Agile approach doesn’t worry about trying to get “stable requirements” for the entire application up front--in the real world requirements are never stable! Therefore the focus is on maximizing our ability to respond to change and new information.

Now, let’s wrap up our discussion of iterating requirements!

## Supporting Detail: Wireframes and Visual Designs

While the COS helps capture the business rules behind the story, it can’t describe the UI in words. In the case of the story we were examining, we would use wireframes and visual designs to:

- Show the layout and design of the page and form fields
- Show the style and placement of errors and notifications
- Annotate any conditional or dynamic elements of the UI

These supporting documents may be needed for every story that has a visual component.

## Nonfunctional Requirements

Nonfunctional requirements are sometimes forgotten when defining User Stories and COS, because they’re easy to overlook. This can be a serious omission, however, so we need to watch for these closely.

Nonfunctional requirements refer to quality and performance based requirements. If, for example, you system needs to be able to support 10,000 concurrent users, that is a nonfunctional requirement. Other examples might be:

- Minimum response or data transfer times
- Security protocols
- Backup and redundancy systems
- Compatibility with other platforms
- Specific capabilities for expanding future functionality

…and so on. As such, nonfunctional requirements may apply to specific stories or be a story itself.

## Low Fidelity Prototypes

A "Low Fidelity Prototype" is a catchword for any number of things which help visualize or simulate functionality for better requirements iteration. This could be a clickable wireframe made with a prototyping tool, an Excel spreadsheet with macros, or even an interactive animation. Going beyond static words and pictures can be extremely helpful in arriving at better requirements. While the Low Fidelity Prototype may exist only temporarily, it may help refine other artifacts in a way that wouldn't have happened otherwise.

## Test Tables and Test Scripts

The ”final” level of detail is to define tests that can be used to verify that the Conditions of Satisfaction are, in fact, met.

Defining the tests that need to be passed as part of the requirements is one of the most efficient ways to ensure quality. It is far more reliable than having someone “spot-check” the app afterwards (which will likely miss a lot), and, more importantly, it gets the entire team involved in the quality effort.

This approach is sometimes referred to as TDD, or *Test Driven Development*, and it has a number of best practices, including ways to automate much of the testing effort using unit tests and continuous integration, and so forth.

I will focus here on the high level concept of how tests like these are defined.

For simple tests, think in terms of a table structure of possible inputs and expected outputs. Let’s create a test table for the following COS:

- A username must be provided that is between 4 and 20 characters in length

![error_table.jpg](/images/blog/a-short-guide-to-writing-software-requirements/error_table.webp)

To test workflows, or a sequence of inputs, you will need a test script, which is a series of actions with expected results. This clearly outlines for both developers and testers the scenarios that must pass:

1. Register a new account
2. Log in with the username and password established with the new account
3. Verify that the Welcome Screen appears on the initial login
4. Log out and log in again
5. Verify that the Welcome Screen does not appear on the subsequent login

Writing test tables and test scripts for all the different permutations of what can happen is admittedly a lot of work. Breaking it up a story at time helps. But ultimately, writing good requirements is simply hard work—and the reason many efforts are plagued with quality issues is that not enough effort went into thinking through the Conditions of Satisfaction and the test criteria that ensure that what gets built is what was intended, and that it works as intended.

Having seen this in practice I can attest to the significant reduction in defects gained from this approach. You will still find defects during testing—nothing is foolproof!—but the greater care and attention this approach brings to the development process nearly always reduces the volume and severity of bugs overall, shortening the revision cycle considerably.

## Further Reading

[An Overview of Agile Testing](http://testobsessed.com/wp-content/uploads/2011/04/AgileTestingOverview.pdf) - An easy to read presentation on how to implement Agile Testing.

## That’s All Folks

My “Short Guide” became a little long, but at the same time requirements writing is a fairly complex activity. Hopefully I helped clarify a few things and shed light on some approaches you will find useful.
