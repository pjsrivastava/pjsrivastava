---
title: "What to Know Before You Start a Project"
pubDate: 2020-04-10
topic: "Project Management Nuts and Bolts"
---

Many projects are begun with a form of "requirements gathering", which entails taking down a list of desired features from a high-level decision maker, transcribing them into a detailed document, and ceremoniously handing it off to a development team.

The problem with this "order-taking" mentality is that it can result in a vision of the project that is inaccurate, incomplete, or the wrong direction altogether.

I generally refer to this process as “scoping”--but that’s not what *this* discussion is about. Although proper scoping is critical, it’s just as important to look at the “bigger picture” and ask ourselves:

- Are we defining the right project in the first place?
- What do we really need?
- How and why will this project be a success?

Our project may be a technical one, but it is ultimately in support of a business or marketing goal, and we need to begin from that perspective.

Before we start a project, we must first evaluate if we have the proper project *concept*, and then assess the factors involved in *realizing* that concept.

I have witnessed too often that in cases where projects are outsourced or handed to a "technical" department to complete, the "big picture" thinking is kept hidden from the developers and they end up with little context beyond "the application should do this and this and this". In my experience, this is a mistake.

A memorable case of this occurred when a new client *insisted* on describing an application project to us in abstract terms. We were to build a simple portal which provided access to two folders, "Folder A" and "Folder B". There were two user groups, "User A" and "User B" which each had access to content in their respective folders. Simple right? You would think so.

User A and User B had slightly different permissions; User A could only access their own folder, but User B could access both. Then there was an Admin that could see anything, add users, and run reports. OK so far. A week later the client realized there needed to be *two* Admins, an “Admin A” and an “Admin B”. Both could see reports, but Admin B couldn't see anything for the User A group, While Admin A could see reports for both User A and User B, they would not be able to view any activity by Admin A. And while Admin A could add users, Admin B would not be able to. We were starting to get confused about how this would be used, but we plowed ahead.

Two weeks later, the client realized he had gotten *himself* confused. Wait a second, there was no need for “User B” after all. Instead of two Users and one Admin, as had been described in the beginning, there really needed to be two Admins and one User, and some permissions needed to be switched around. At this point, I'm not sure if we were more interested in finishing the app or wringing the client's neck!

The client resisted for a long time explaining to us "lowly developers" what the purpose of the app was, and the context behind it. Once he finally did (after repeated prodding on our part), the light bulb finally turned on. Once we learned the purpose of the app and what the "User A/B" stuff was representing, we not only realized how the app needed to be built, we also saw flaws in the current design that the client *hadn't even realized yet*. And because we understood the domain and purpose of the application, we were able to document and structure it in a way that someone else would actually understand.

Ironically, after being successfully completed, this project was quickly scrapped by the client company because someone decided it was “not needed” to begin with!

This underscores the importance of better evaluation and communication of a project’s objectives and purpose. Fortunately we don’t work with clients like this anymore! The lack of strategic thinking and collaboration led to a team fumbling in the dark, working on a project which was a poor idea to begin with.

How do we avoid this? First, asking ourselves the right questions, the *tough* questions, is critical. Sometimes, we *think *we already know the answer, so we avoid asking a question in the first place. The reality is we often learn more than we thought we would by asking, and by inviting discussion, often come to better conclusions than what we originally started with.

Second, we must foster communication and collaboration. Everyone should understand the goals, purpose, and rationale behind the project. The great ideas that come about when this happens are often surprising. True collaboration has immense power, and I've seen it happen where I.T. folks come up with some great implementation ideas based on ideas given to them by Marketing, which then inspires Marketing to think even bigger, which then causes I.T. to come up with even better ideas--*if* they work together.

So if it’s all about having the right conversations, what questions do we ask to get them going? The answer is that it depends, but there are some good starting points. There are multiple factors that contribute to project success; understanding the background and context of a project, understanding the client, and understanding how the project should be approached. What follows is a list of questions along these lines. For the sake of simplicity, I have divided them into three types: Business, Stakeholder, and Project-related. For the sake of brevity, I've limited myself to a total of a dozen questions (four in each area). You're on your own as far as coming up with follow-up questions, but these should get you moving in the right direction.

## Business Related Questions

### **1. What Business Problem are we trying to solve?**

Is your project meant to generate leads? Improve operational efficiency? Attract a new type of customer? A project’s “reason for being” is about fulfilling a need, improving something, or capturing an opportunity—and should be clear and concise.

When the development team doesn’t have a full understanding of what a project is about, decisions will end up being made that don’t make sense. Without context, incorrect assumptions will be made. The wrong architecture may be advanced; or the user experience and ROI of the project will be diminished due to a lack of proper focus.

Defining the business problem in a specific and measurable way means giving the project a specific and measurable objective. This objective becomes lens through which we focus the scope and the razor with which we shave off unnecessary features. Thus, as opposed to being on a “need to know” basis (as in the example I shared earlier), I consider this *fundamental knowledge*. With it, we put our team in a position to be a creative contributor to the project. Without it, we are left to make guesses and assumptions, and we interject our own preferences and biases into the project. That should never be the case! Know the business objective, and keep it front and center at all times—share it, return to it frequently, and let it guide you throughout the project.

### **2. Who is the Target Market or User?**

Who is the intended audience? What are their demographic and psychographic characteristics? What is their behavior now, and how would you like that behavior to change? Whether your project is a website or application, the better you understand the target market or user, the better you’ll be able to prioritize and generate ideas.

Once the target market is understood in concept, it’s important to drill-down to the details. The first pass at this is to do a classic *market segmentation analysis*. How does the target market break up into distinct groups? Who are the different types of users?

Sometimes the client takes market segments "for granted" (because they're so familiar with them), and don't make you aware of them until later in the project. Try to avoid this by thoroughly going over market segments and user groups up front, so you don’t have to retool business rules later on. This is especially important for marketing websites, since you may want to design different “paths” or appeals, to different segments of the market.

Next, develop “User Profiles” that capture specific details and specific examples. Create a representative user, taking into account age, background, experience, behavior, and perception. How does this person make decisions? What are they influenced by? Strive to understand users at a personal level.

One of the biggest mistakes in business strategy is that we follow strategies that appeal to *ourselves *instead of appealing to the *target market*. We must be wary of letting that type of thinking trickle down to the project level. A strong target market and user analysis will go a long ways towards a better and more focused project.

### **3. Who is the Competition and what are their Strengths and Weaknesses?**

Understanding the competitive landscape is crucial, because it is what you will be measured against. In order to be relevant, you must at least perform at a comparable level to your competitors. In order to be successful, you must outdo them, as significantly as possible.

A good competitive analysis requires a bit of detective work. Once you’ve identified all your direct and indirect competitors, you must discover as much about them as you can. Pretend to be a customer; visit their websites, sign up for their offerings, or try their services. Take notes on the user experience. What do they do well, and what do they do poorly?

Next, understand what people are saying about the competition. Search the social media sites, read industry publications, and interview users. Find out what people are cheering about and what they’re complaining about.

The harder research is finding out details of your competitor’s organization, as that tends to be private. Often, however, there’s a lot you can infer from casual observation. From a company’s website alone, I can often figure out what kind of development platform they are using and make a judgment on the makeup and strengths of their team.

Our main focus throughout our competitive analysis is to identify the following

- Benchmarks, good ideas, and proven tactics to “borrow” and improve on.
- Weaknesses in execution or customer perception that give us an opening.
- Competitor initiatives that threaten our strategy or assumptions.
- Opportunities to outshine, outmaneuver, and build a competitive advantage.

The step that follows is to take a hard look at the standard *we* must rise to in order to be competitively successful.

### **4. What is our Competitive Advantage?**

Why should customers pick *you*? Why are you a better choice than the competition? It’s important that we address this question in a frank and realistic way. If our underlying competitive strategy is not strong enough to make a dent in the market, our project may not be worth doing in the first place.

Competitive advantage is not easy to come by these days; everyone claims to have great prices, great service, and better offerings. More and more, strategy and marketing play a bigger role in rising to the top—as does technology. Our work frequently puts us at the intersection of marketing and technology, giving our projects important, sometimes *supremely important*, influence on a company’s competitive success. Whether it’s a website or web application, our projects are often designed to either *advertise* or *be* the competitive advantage.

It’s for this reason I take such care in understanding the business and competitive environment. Technology can be a great lever. Designing a "killer website" or "killer app" can elevate even the humblest business into bold new heights, as the market has often demonstrated. My goal is to receive enough knowledge and inspire enough thinking to get us into the “killer app” mentality.

## Stakeholder Related Questions

### **5. Who are the Stakeholders and Decision-Makers for this Project?**

Part of project success is making sure that everybody is happy (as much as possible, at least). To do this, you should know the following things about your client's organization:

- Who should be included in all approval meetings?
- Who is the final decision-maker when it comes to key aspects such as budget, features, and deadlines?
- Who can offer the best knowledge and guidance in determining business rules?
- Who will be directly impacted by the project and is likely to offer helpful feedback or evaluation?
- Who is the best "go-to" person to help you get action or approvals?

Having dealt with clients of many sorts and sizes, I've witnessed the pitfalls that can occur if you don't attend to these factors. If you are dealing with a single person on the client side, the situation here is vastly simplified. Beware, however, if your client works "by committee"; this scenario often require adroitness to manage.

Here are a few things to watch out for:

- **Holding meetings that don't have all stakeholders present.** Sure, you'll be told that "so-and-so" couldn't make it for whatever reason, and to proceed anyways. The problem occurs when you move forward based on a consensus of the group you met with, and later down the line, "so-and-so" finally shows up and decides that things are going in the wrong direction. For some reason, the member who was missing often turns out be a vocal and highly influential person who then changes the group's mind and sends you back to square one. An example is holding the first few meetings without the CEO, getting started, and then having to scrap everything because the CEO pops in later and decides to go in a different direction than the rest of the group.
- **"Know-it-all" individuals who try to tell you what to do, even though they have no expertise or decision-making authority.** Getting feedback from different sources is valuable, of course, but be wary of who really has influence. Sometimes, a person may be vocal about what they think and make requests based on their personal opinion rather than consensus with a higher-up. Don't let them send you on a wild goose chase! Bounce everything off the real decision-maker so that things can be properly vetted and prioritized. One man's urgent request is another man's triviality.
- **Dealing with a proxy as your main point of contact.** Sometimes you get stuck with a stakeholder who doesn't want to get very involved. Try to make sure it doesn't stay that way. Communicating through a proxy is a recipe for inefficiency, inaccuracy, and miscommunication. By "proxy" I mean anyone in a position of limited authority that has been sent to "manage" the project despite having no decision-making ability. Avoid this if you can. Using the proxy as a "relay" point will drag out the project, result in selective interpretation and communication, and end up costing more in time, wasted effort, and frustration than communicating directly with the decision-maker.

There's no easy way around it, it takes resourcefulness and diplomacy to deal with these challenges. The best way is to make certain your client has the right expectations going into the project about the level of commitment and collaboration you require.

### **6. What Personality Influences Impact the Project?**

For better or worse, projects are subject to the quirks, egos, and agendas of those at the top (what else is new?). Sometimes, you are offered input that is genuinely helpful. Sometimes, however, you are given directives that are counterproductive or even nonsensical.

You must determine what you can counter through persuasive argument, and what you have to live with. Much depends on the severity of the issue. If, for example, the client is simply picky about cosmetic features, you can work with that. On the other hand, if the client wants to dictate how your project is architected, you may need to intervene with your own judgment.

The two things to keep in mind are:

- If you don't pay attention to the particular preferences of the client your end result may not be *judged *a success;
- If you do not push back against the counter-productive preferences of your client the end result may not *be *a success.

Is it sounding more and more like diplomacy is a big part of project management? *It is.*

Part of the reason for doing such an in-depth study of the project and business environment is to put you in the best possible position to make sound recommendations. Establish your expertise early, and you will be better able to "win-over" your clients on the decisions that matter. You must be clear that you have your client's best interests in mind, and demonstrate convincingly how your way will achieve them. If you can't, you must be willing to compromise or find another approach. Finally, if you are in a situation where the conflict is too great, your best option may be politely withdraw rather than sacrifice your standards, reputation, or integrity.

### **7. What is Driving the Timing and Budget for this Project?**

Often deadlines or budgets are given to the team, but the reasons behind them are closely guarded secrets. The truth may be that they are dictated by some external entity or event, based on some larger initiative, an attempt at bargaining or intimidation, or are arbitrary, based on limited thought or information.

The less we know, the less able we are to judge or recommend an optimal solution to the circumstances. Employing a “contracting” mentality, where the vendor and the customer are pitted against each other, each trying to negotiate the “best price”, will inevitably lead to substandard results.

Instead, we need to recognize that cost, timing, scope, and quality are all inter-related, and we must collaborate to find the optimal balance. If for, example, the deadline is paramount, we should scope conservatively, paring down features to ensure a deliverable on time, with a buffer to deal with any surprises or delays. If cost is the biggest deal, we may have to simplify the overall architecture of the project, trimming custom development so the project can be completed using junior resources or out-of-the-box solutions. If a level of competitive quality is the driving factor, we may need to push back with a more realistic assessment of the required time and budget.

Once we get the conversation started, the real complexity of these decisions is revealed. Was the project deadline part of a larger marketing campaign, and if so, does it make sense to adjust other parts of the campaign to accommodate the needs of the project, or is the campaign locked in due to cost or commitments? Is reducing the scope and quality of a project an acceptable answer to a small budget, given that it may result in future expansion and maintenance being more costly? Would more time and budget be approved if that would allow us add features *x,y, and z* to a project (which were previously unconsidered)?

In order to come up with the best possible project in terms of *value*, a solid discussion is called for on such topics. Thus, although the reality is that budget and deadlines often come to us in the form of dictates, any opportunity we have to understand their context or collaborate in their determination may improve the project deliverable dramatically.

### **8. What Type and Frequency of Communication is required?**

In other words: what does this client need to keep them happy, on the communication front?

I've found that clients vary widely. Some don't feel secure about their project unless you communicate with them every few days, and others don’t want you to bother them unless you have something major to show. Generally speaking, I consider either weekly or bi-weekly updates the norm, with the caveat that you must be aware of what type of communication will be the most effective, how involved the client wants to be in different aspects of the project, and what your communication framework should be.

On one occasion I had been emailing updates on a project to a client, only to get an annoyed phone call one day wondering why he hadn’t heard from me. As it turned out, the client was not used to checking or communicating via email (go figure!) and I should have been calling him. Other clients prefer face-to-face meetings, while still others are happy with web conferencing.

Then there’s the question of detail: some clients just want to know if things are going good, bad, or indifferent, whiles others want a play-by-play description of where you are and what you’re doing. The client may want to weigh in on little decisions along the way, or they may be very busy and want you to take the initiative using your informed judgment.

There are the little quirks to be aware of: which superior should be cc:ed on emails to ensure requests are acted on, whether it's better to call someone's cell phone vs. their office phone, what's the best time of day to make contact. Some clients may need “extra help” from you to remember things you’re waiting on, or guidance on how to make decisions in their best interest.

Establishing a good rapport with the client plays an important role in managing a project. By adjusting your approach to match the client’s communication style and comfort level the project will go that much smoother.

## Project Related Questions

### **9. What is the Project Vision? **

A Project Vision is a simple and compelling explanation or “roadmap” of what the project will achieve and how it will create value. It should be interesting and exciting--if it's not exciting to think about, it probably won't have very exciting results.

A Project Vision is closely related to the question of *competitive advantage* that we touched on earlier. It addresses this question at the project level, defining a concept for how it will succeed and grow.

To help get in the right frame of mind, here are a few exercises for framing your project vision:

### **Elevator Speech**

This classic technique gets to the heart of the matter by boiling your project down to its essence. The setup is that you've just stepped into an elevator with an important executive, and you have 30 seconds to sell your idea before he reaches his floor. What will you say to convince him your idea is worthwhile?

This is a realistic approach because you always have limited time to make your case. If you can’t explain your ideas in this amount of time, it’s too complicated, and if it doesn't generate an instant "oh wow!" factor then it's too boring. This exercise forces you to come up with the simplest, most focused, and most powerful explanation of why your project is exciting and worth doing.

### **Product Box**

Even though our project may not be designed for retail sale, it’s an interesting thought experiment to picture what a product box for it would look like.

What features would be displayed prominently? What would the screenshots look like? What would a comparison chart between you and your competitors highlight? In other words, design a product box that captures what you want the project to be.

Considering other forms of advertising can also help you think “outside the box” (no pun intended). What about a product brochure, flyer, or even a commercial? What kind of personality and messaging would they convey? This perspective helps you think in terms of strengthening the client’s brand (or creating one) and what features and benefits will grab the attention of your audience.

### **Product Review**

Imagine yourself a product reviewer who writes for a magazine. You do reviews all day, you’re very familiar with the competition, and it takes a lot to impress you. Imagine your project is complete and your "critic" persona is now writing a product review about it.

How would you like this review to be written? How would you like to be compared to your competitors? What features will be raved about? What kind of awards and recognition would you like to win? What are some descriptive quotes and testimonials you’d like to hear? Give yourself something inspirational to live up to.

### **Project Timeline/Landscape**

Although projects may stand alone, they are often part of a larger "IT" or "Digital" strategy—with good planning, that is. Does your project fit into an overarching plan? Does it start small and then grow in phases, spinning off ancillary projects or gradually integrating with other systems? Will it spread to new user bases or take on new dimensions of functionality? Will its primary use stay constant, or will it evolve over time?

Although this sort of long-term thinking may change over time, it emphasizes building a foundation that synergizes with other pieces of a client’s overall business and marketing strategy. A project designed with this in mind may deliver more value than one simply created as a “one-off”.

### **10. What is the Expected Life-Cycle of this Project? **

This often neglected question is important for both business and technical reasons. Eventually, our project will reach the end of its useful life, at which point it will need to be replaced. Even before it reaches the end of its “useful” life, the value it offers may decline rapidly due to changes in technology or the competitive environment.

As soon as we get our project “out the door”, we are immediately beset with new responsibilities:

- Project maintenance and support, to keep it current and operational;
- Project expansion, to add value during its useful life;
- Project replacement, once it becomes obsolete or irrelevant due to technology or competition.

Rather than worrying about these things *after* the launch, we should address them in the earliest stages of planning. Here are two questions to ask ourselves:

- Is what we're building today robust and scalable enough to easily maintain and expand? For how long or up to what point?
- How will we replace, migrate, or transition once the project has reached the end of its useful life?

If you plan for a long life-cycle, you must accept the fact that developing a maintainable, scalable foundation for a project will take more time and effort than simply slapping it together. More attention needs to be paid to the platform, the architecture, and the coding itself. Thus, we should recognize that as a component of quality, life-cycle is a variable in the trade-offs between a project’s time and cost. Don't be surprised if doing a project the "right way" takes two to three times the expense (or more) of doing things the "quick" way.

This does not mean that every project must be a grand endeavor, but that the means should correspond to desired ends. A “quick and dirty” solution may be acceptable if you need something immediate and there’s no issue in it being a “throwaway” project. If you have greater expectations, however, you would be wise to communicate them to the team, so the appropriate solution can be calibrated. The projected requirements for maintaining and expanding a site play a critical role in choosing the right development approach, which in turn impacts the overall timing and budget.

One should also consider the budget in terms of the life of the project, rather than simply the initial launch of it. Some companies blow their entire budget getting a project launched, but then realize that maintenance bears a cost as well. Because budget was never allocated for maintenance, updates, and additions, they don’t happen and the project loses value quickly. Whenever we see a website that hasn’t been updated in years, or an application that has persistent bugs that are never fixed, or features that are never improved to stay competitive, this is frequently the cause. Projects in this situation cease to be a “competitive advantage” and instead become a “sunk cost”. Thinking through a project’s life-cycle leads to better planning.

### **11. How will we Measure the Success of this Project?**

You would think this would be an obvious question to consider. Surprisingly, many projects are launched without any real measurement targets in mind—or ways to measure them.

Instead, the project is either launched “just to get something out there”—with the premise that “something is better than nothing”—or the intent of the project is left in abstract terms, such as “increase brand awareness”, or simple observation is relied upon to deem the project either a success or failure.

The problem, of course, is that it’s difficult to improve what you don’t measure. There’s really no excuse for this in our line of business, as a cornucopia of tracking, statistical, and reporting tools are available for us to do any and every type of measurement and analysis. If there isn’t a tool for it, consider making part of the project scope to build it in.

We should really decide two things: what to measure, and then what the minimum measurement must be in order to attain a positive ROI. This process is well established in the finance and accounting world—we just need to apply it towards our web and software projects.

For example, let’s say the purpose of our website is to generate leads, a lead being a prospective customer that fills out a “request quote” form on our website. We definitely need to track the number of leads we’re getting, to begin with. To get the conversion rate, we need to figure out how many people are visiting our website, how many of those actually get to our request quote page, and how many of those actually complete and submit the form. All of this can be done with standard website tracking apps such as Google Analytics.

This can be taken a step further by calculating the value of a potential lead. How many total leads do you need to receive before you recoup the cost of building the website? How much time will this take? How does this translate into a monthly conversion rate? What if you can increase the site traffic by 10%? Once you start with some measurements and calculations, even if they’re not exact, the insights will lead you into useful directions.

Incidentally, instead of determining project budgets based on “what we can afford”, or “what we’re willing to pay” this type of analysis gets us thinking in terms of ROI—a more appropriate concept. If I can tell you that doubling your project budget will triple the return on it, you might be willing to find the money, right? This is often a huge “wake up call” to clients, because they think of their project as an “expense” instead of an “investment”. Even before we have actual numbers, we may be able to use “reasonable assumptions” to calculate the potential ROI of adding various features. By thinking in terms of measurements, even rough ones, we may prove to ourselves that certain things either make sense or don’t. If we go this way, what are our maintenance costs likely to be vs. if we go that way? How many more people could we potentially reach if we added this feature? There are myriad measurements and calculations you can perform, based on the type and nature of your project.

Once you’re up and running, measurement takes the guesswork out of changes to the project. How do you know if your latest idea is a winner? Test it and measure it! Sometimes our “gut instincts” are right, but sometimes they’re way off the mark—and we make a change or “improvement” that actually loses us users instead of gaining them. Instead of waiting for somebody to send us a complaint letter, it’s better to know this immediately via our own reporting systems. The reverse is true as well; we may hear someone complaining about a particular feature or change, but if our data shows that most users think otherwise, it’s full steam ahead.

Taking this even further, we may consider our project as a “business intelligence tool”. Instead of just measuring itself, our project may also provide valuable information on our users, our market, and other aspects of our business. All we need to do is build in the methods for gathering, calculating, and reporting the data. Now *that’s* powerful.

Embracing this empirical mindset can do a world of good for troubleshooting and improving our projects.

### **12. How will we build on and support the Project over time?**

We can get so wrapped up in launching a project that we give little thought to the support it needs once it’s up and running. I’ve seen companies taken off guard by the sudden need to provide customer support, or even...gasp!..*technical support*. Not to mention the fact that some form of maintenance might actually be required.

All the fine details of post-launch support don’t have to be figured out at the planning stage of a project—just a general idea of what you’re getting into.

Consider scalability requirements. What if the project’s user base experiences sudden growth? Is there a risk of the server shutting down or performance slowing to a crawl? How many concurrent users should you be able to handle? This goes hand-in-hand with uptime requirements. Are short maintenance windows acceptable, or do you need the protection of redundant fail-overs? What kind of backup and security procedures need to be in place? Not only does the hardware and network infrastructure need to be planned accordingly, but you may need to write additional code to support it.

Don’t underestimate the human side of support, either. No matter how easy you make something to use, someone will have trouble with it—it’s just the way things work. Email support, phone support, and live chat are all options to consider. Do you need to provide support 7 days a week, or is during business hours sufficient? What kind of response times will be acceptable?

If you’re launching an application you may need to write help documentation, create tutorial videos, or provide training on-site or by webinar. Any help that needs to be integrated into the project should be included from both a cost and scope perspective.

Having a defined maintenance plan is a must. Maintenance falls into several categories. There’s maintenance of the hardware and backups; bug fixes to the software; and updates to the content or functionality. Of course, maintenance is not always easy to plan or foresee, so we should be prepared for some element of the unpredictable. Here are a few examples of unplanned maintenance taken from “real life” experience:

- Virus or robot attacks on the site force a rewrite of some code, or implementation of a blocking filter
- A new version of a browser is released and breaks the layout of a site; it must be adjusted to compensate
- The latest “Service Pack” applied to your server turns out to be incompatible with a third-party application you are using. Finding and fixing the problem requires hours of troubleshooting and re-installation.

On top of this is the problem of finding and fixing bugs, which, for some reason, happens when you least expect it. Even after an application passes many rounds of QA, there will exist some permutation of events or actions that a user can take to cause an unforeseen problem. This can be minimized, but is difficult to eliminate entirely, particularly in a complex program. Having the resources on hand to fix bugs in a timely manner may be critical.

Resources for updates and upgrades, part of life-cycle planning, should also be allocated. As we discussed above, this is a key part of maintaining value and extending the life of the site. Beyond just planning, the entire organization must be operationally ready. If you need to keep content updated, do you have marketing staff assigned to it? Do you have regular strategy meetings to discuss results and possible improvements? Do you have resources on tap with the knowledge of how to extend the application? It takes people, time, and money to make things happen! I’ve seen companies with “good intentions” let their projects fall by the wayside because everyone was just “too busy” to coordinate or put anything in motion. This can be avoided with some basic preparation.

After all the hard work we’ve put into it, the last thing we want is for our project to end up stumbling out of the starting gate, or to fade away quickly. A little long-term thinking, even if basic, can improve your project plan significantly.

## Conclusion

The dirty secret of web and software development is that many projects fail not for technical reasons, but because *the wrong thing was developed in the first place*. More often than not, this is due to inadequate thought and communication on overall strategy.

It's not always easy to foster this type of deep analyis, especially in organizations that tend to isolate and compartmentalize knowledge and decision-making. However, the further we can go in answering questions such as the ones I've outlined, the better our ability to define, plan, and manage the project, and the better our ultimate results.

Of course, we continue to tweak and refine the details as development progresses, but the foundation stays consistent. We deal far less with the problem of clients “changing their mind” in a significant way because the plan is solidly rooted and congruent with the needs of the client and the customer. Developers are also able to work efficiently because they have a solid context for what they’re building. In short, I’ve found that projects that go through a process like this run smoother, generate higher client satisfaction and ROI, and tend to be outstanding successes once completed. This is really just the natural result of a little extra hard work, thought, and communication—before you begin a project.
