---
title: "A Short Guide to Estimating Software Projects"
description: "Why software estimates go wrong, and how to make them less wrong."
pubDate: 2014-03-17
topic: "Project Management Principles"
---

Are you tired of:

- Coming in late and over-budget on projects?
- Hearing the same excuses over and over for why things didn't go as planned?
- Feeling as though lessons were learned--but still ending up in the same boat on the next project?

If this sounds familiar, welcome to the club. It's a large club. If you no longer want to be a member, there are things you can do that will help, some of which I've written about on this website--but none is more important and fundamental than starting with a good *estimate*.

## A Bad Estimate Kills a Project Before it Starts

Is it possible to recover from a bad estimate? I've never seen it, at least not when the estimate is significantly off. Let's face it: a bad estimate means we *underestimated*. The risk of this is often downplayed at the start of a project but becomes a crisis at the end of it, when it results in the following "triple-whammy":

- The client or stakeholder is angry because the project is not able to meet a deadline, is not as polished as expected, or is a financial embarrassment;
- In a rush to complete the project on time, the developers are forced to take shortcuts which manifest as quality and maintenance issues;
- Future productivity is slowed down because time is split attending to bugs and issues on the previously rushed project.

This last point in particular is why some companies find high performance so elusive. They seek to compel greater productivity by setting aggressive targets (i.e. estimates), but it backfires and ends up dragging them down instead.

To break out of the repeating cycle of bad estimates, we must be willing to change our perspective and our approach to estimating.

## Embracing the Reality of "Planning Fallacy"

Even when we think we won't underestimate, we do anyways.

This is not apparent to everyone, but this has been exhaustively researched, in far ranging applications beyond software development. It doesn't matter if you ask someone how long it takes to drive somewhere, build a house, dig a hole, or write a letter. It's all been tested, and researchers have found that humans have an inherent bias to underestimate, across the board. There is even a scientific name for it: planning fallacy.

Not only is planning fallacy consistent across disciplines, a more incredible finding is that *we repeat it even when we know we underestimated the last time.*Who can explain this quirk of human cognition? Not me, but all I--and you--need to know is that it is real, and it exists. If there is any doubt, by all means, [look it up](https://en.wikipedia.org/wiki/Planning_fallacy); this is the first step to becoming a better estimator. Everything from here on out is about how to beat planning fallacy.

## Quality is More Work Than We Expect

Quality refers to the fit and finish of our design and the usability of our interface. It refers to the performance of our features and a lack of bugs. It refers to the underlying architecture of our system, and its capacity to grow and adapt to changing uses. It refers to the cleanliness of our code, and the ease with which it can be maintained. It means many things.

Ensuring high quality requires a lot of extra time, work, and planning. On the other hand, rushing to meet deadlines, and trimming out "non-essential" work, is a good way to end up with low quality. Planning fallacy and quality problems compound each other; first you didn't estimate enough to get good quality, and then the project had to be held back even further in order to address the quality problems. In such cases projects don't end up just "a little" late and over-budget, but rather dramatically late and over-budget. I've frequently seen these projects in the "green" right up until the first quality problems start getting discovered, at which point they suddenly go into the "red".

## How Much Are You Willing to Invest in Better Estimating?

We need to estimate better, but the challenge is how to estimate adequately given that the world is knocking down our door to do it quickly.

This results in throwing out off-the-cuff, overly optimistic estimates--which come back later to haunt us. Let's take a moment now to pause and break down the estimating process. There are those who think that spending more time on estimates will not make them better, but I disagree. At a certain point yes, but it's a simple truth that if you do a more careful analysis you will almost always arrive at a better estimate.

It's not the only option, however. In fact, I offer you three options, based on how much time and energy you have to invest in estimating:

- **The quick and dirty method**, when there really is no time to spare. It has drawbacks, but it will at least give you a fighting chance if you don't have time to go beyond it.
- **The predictive method**, when you're in a Waterfall situation and you need to create an estimate that may end up as a "fixed" budget or timeline. This requires more time and analysis, but I'll share some tips for doing it well.
- **The empirical method**, which has the benefit of being both relatively quick and accurate, but requires embracing an Agile way of working.

I actually recommend reading each of these methods, because there are shared principles, and they build on each other in certain ways.

## A Preface: 5 Estimating Rules You Should Never Violate 

Regardless of how you go about it, observing the following principles are important for *every* estimate:

### **1. Get Estimates from the Source.**

I've seen detailed estimates and project plans produced by project managers who never once consulted anyone on the development team. This is an excellent way to make bad assumptions and produce a bad estimate. Always get the input and perspective of whoever is going to actually do the work. If that's a team of people, get the team to participate in the estimate. Don't take anything as the *final* estimate; there is still work ahead to build and refine it, but this is the starting point.

### **2. Make Sure Everyone *Really* Understands the Requirements.**

Lazy requirements will result in a bad estimate every time. This means making sure everyone understands the context and intent behind the requirements, which is a matter of good communication. It also means putting in the work necessary to make the requirements comprehensive and detailed enough to estimate. The more room you leave for ambiguity or misperception, the greater the odds of missing something big in the estimate.

### **3. Avoid Influencing the Estimate with "Weasel Words".**

There are many sneaky ways estimates are manipulated. The following psychological appeals are very effective at getting people to lowball their estimates :

- "This should't take more than a couple of days, right?"
- "Really? I didn't think this was going to take you that long."
- "Remember that we really need this estimate to come in under $50,000."
- "My guess is that this estimate will come in at about 100 hours, but let me know what you come up with."
- "You should be able to do this a lot faster this time."

I've used a mix of tactics above; some are designed to elicit an emotional reaction, like fear, self-doubt, or embarrassment; others are cognitive tricks such as the use of anchoring and priming. For the sake of simplicity I refer to them as "weasel words" because they are great at weaseling in the agenda of lower estimates, under the radar.

If you seek rational, realistic estimates, you must guard against using such language, consciously or subconsciously. To understand in depth how the estimating process is influenced by such tactics, a good read is the book [Thinking, Fast and Slow by Daniel Kahneman](https://www.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman/dp/0374533555/) (who incidentally was one of the pioneering researchers of planning fallacy).

### **4. Guard against "Groupthink" and the "Halo effect".**

"Groupthink" is a phenomena where group conformity takes precedence over independent thinking, and can happen when conflicts or alternative ideas are frowned upon or received poorly.

This is the opposite of what we need to estimate well, because only by challenging and questioning each other are we likely to "shake out" the bad assumptions and missing analyses that are the source of our planning fallacy. A related phenomena is the "halo effect", which is the effect of not wanting to contradict someone because of our impression of them being senior to us, or more experienced, or more knowledgeable, successful, etc.

To estimate better, we must build an inclusive culture where the entire team is invited to participate and to share their opinions. Disagreements should lead to exploring different viewpoints, which in turn will result in a better and more analyzed consensus. One way to facilitate this, while mitigating groupthink and the halo effect, is to use a method first developed for the Department of Defense known as the "[Delphi method](https://en.wikipedia.org/wiki/Delphi_method)", but which has been adapted for use in software development under the name "[Planning Poker](https://www.mountaingoatsoftware.com/agile/planning-poker)". While often associated with Agile, the Delphi/Planning Poker approach can be beneficially applied to any estimating situation.

### **5. Don't Assume Perfection.**

I mentioned this principle in the article [PJ's Rules of Project Management](/blog/pjs-rules-of-project-management), and it is crucial when it comes to estimation. One should be prepared for underestimation due to imperfect knowledge and unanticipated events and discoveries, and expect that not everything will go 100% to plan. In popular practice this is sometimes handled by "padding" the project estimate. It is a form of deception, however, because in the end both the size of the original estimate and the padding amount prove inadequate, keeping companies confused as to why their estimates still aren't working. As such, we'll more thoroughly analyze what this "padding" represents and how to substitute it with a better approach.

## Estimating: Quick and Dirty

To be clear, I don't recommend estimating "quick and dirty". When possible, invest the time to do a proper estimate. However, since I know many will do it anyways, especially under trying deadlines and circumstances, I'll offer some advice on what *I*would do.

### **Triple the base estimate of anything you are doing that is new.**

I've seen some project managers knowingly add a 20% padding to an estimate, figuring it a generous allowance for anything unanticipated. I've seen others, who have learned to be more conservative, add up to a 50% padding. In spite of these measures, again and again, projects go over.

I'm not sure where this idea came from, but it seems like guesswork to me. I prefer to use real data as a guide. Having spent over a decade poring over hours reports on completed projects, I've come to one conclusion; when a task is underestimated, due to a lack of knowledge or experience, it is usually not by a factor of 20% or 50%, but by a multiple of 2, 3, 4, or even higher.

I've settled on tripling initial estimates as a good rule of thumb, and I'm not the only one who has observed this. Alistair Cockburn, one of the pioneers of the Agile movement, [writes that he has found that multiplying estimates by the number *pi* (3.14)](http://alistair.cockburn.us/The+magic+of+pi+for+project+managers) has an almost magical effect at correcting initial estimates. If the team is well functioning and the work is well understood, I feel comfortable lowering the multiplier (down to 2 or 2.5), whereas it's the other way around if the team is unproven and the work is highly uncertain. In the next section we'll do a more detailed analysis of why such a large correction is needed. But when pressed for time, this is my rule of thumb.

### **Compare the estimate against past project results.**

If you've done any projects in the past, you should be using them as a basis of comparison for any future projects. That may sound like an obvious check, but in practice I've found many don't do it, by rationalizing to themselves that "this project" is very different from "the last."

It doesn't matter. You should still be able to answer the following:

- Is the level of effort for this project bigger or smaller than the last project?
- How long did it take to complete the last project? How much did it cost us internally?
- If we repeat a similar performance as we did on the last project, how long will it take us based on the difference in size and scope?

It's better if you compare the effort to at least two other projects to average them out. You will be tempted to think that your future performance will greatly outstrip your historical performance; or that the current situation will surely have fewer trials than the last; be wary of this. Instead force yourself to measure and benchmark against past performance. If your last website project took 8 months, but you now think you can complete a similarly-sized project in 4 months, you need to seriously reflect on if planning fallacy is distorting your perception.

### **It's usually better to range the scope than the time/cost.**

A common thought is to give estimates as a range, to express the fact that, after all, it's not an exact science. For example, you might say we estimate the cost will be between $50,000 to $70,000, or that the project will take 6 to 8 weeks to complete.

It's a nice idea that often backfires. Here's the problem:

- If the gap between the high and low end of the range is too much, it will almost certainly be rejected as an acceptable estimate.
- Whatever the low end of the range was will somehow become the "de facto" estimate, and everyone will forget about the high end.
- If you later hit the high end and point out that it was within the agreed-upon range, somehow people will be dissatisfied.

What's happening is that people tend to mentally zero-in on the low range of an estimate, even though it's the statistically most unlikely outcome. Ranging the estimate this way may work against us. Ranging the scope, however, gives us better options.

Let's say you have a scope of 12 features. First, get them prioritized, and and make sure you understand which are "must-haves" and which are "nice-to-haves". Based on this priority, you can provide options for the client/stakeholder to choose from, allowing you to scale the estimate in a variety of ways:

- We can get 9 features completed by August 1st, or all 12 features completed by September 1st.
- We are confident of completing 10 features within the estimate, with a chance of complete 1 or 2 additional features.
- We can launch the first 8 features as a Phase 1 and then the second 4 features as a Phase 2.

This puts the focus on what the minimum scope is that can be lived with--which is better than arguing over how low the time/cost should be.

### **Itemize assumptions and deadlines.**

All estimates are dependent on assumptions and deadlines, and if any change, it's a big deal. It's therefore important to make them transparent and to discuss them regularly.

- Assumptions are an important aspect of defining the scope, and what is to be expected. This includes resources, deliverables, and dependencies, all of which have a direct effect on time and cost. Any misunderstandings or ambiguities are sure to result in arguments after-the-fact about what the estimate did or didn't include.
- Every project is contingent on many internal deadlines, such as turnaround time on reviews and approvals, when assets are received, when meetings are scheduled, how quickly requests are fulfilled, and so forth. Many a project has run into schedule woes because such activities occurred at a more leisurely pace than hoped for. Its important to not overlook this timing and to get buy-in on the internal deadlines needed to make the estimate possible.

If nothing else, I recommend these be documented with every estimate. They provide something to discuss if the estimate needs to be further negotiated, and a rationale for revisions should it be necessary.

## Estimating: The Predictive method

"Waterfall" has a bad rap these days, but most companies still require detailed project plans before anything can get started; that's a fact of life. I personally have spent most of my career in this situation. Here's what I've learned about estimating with this approach:

### **Find Missing Tasks**

Changing requirements is one reason Waterfall estimates run into trouble, however most people are familiar with the process of "change orders" to separate it from the act of estimating (a required practice for this method). The more salient issue is that even the requirements that *don't* change are underestimated.

Here's one of the biggest reasons why: missing tasks. When we think about the activities that must be done, we identify the obvious ones and estimate those, but miss others. This is why, at the end of the project, there is often much reflection about tasks that were unnoticed or unanticipated at the start.

Even mundane things are underestimated when we don't think though all the details. Take a simple task like building a registration form for a website. How hard can that be, right? Just slap a few text boxes on a page and you're pretty much done. That's how I use to think. When I discovered later that it took three times as long to work on a registration form as I thought, I went back and analyzed where all the time went. What I found is time spent on things I forgot to consider, such as:

- Form field parametersCharacter limits, default values, and input masksValidation requirements and messagesServer side checks for duplicate usernamesMinimum password requirements
- Data and error captureCreating database tablesReports/exports for registrationsError message if database cannot be reachedError logging if registration form fails
- Mobile layout/responsive design
- Response on submitThank you/confirmation pageMail account and server setup for sending confirmation emailEmail copy and subject line

...and so on. You can argue that some of these tasks are "out of scope" but it's a battle of opinions after the fact, since some *were* "in scope" and the others you should've considered beforehand. The point is that properly breaking things down makes a huge difference in how you estimate.

### **Think Beyond Coding**

Another issue is to think of "coding" as the main activity which you are estimating. How long will the developers take typing away at their keyboards to build this thing? This perspective is likely to result in underestimation.

Even those who understand that development is just one part of the "software development lifecycle" tend to give it the most emphasis. We think the estimate for the development time, with a little "padding", should do the trick as a project estimate. My analysis of actual time spent on projects suggests otherwise.

I submit that, on some projects, only 50% of the time and cost may be spent on "development tasks", as they are traditionally defined. Sometimes it's closer to a third of the overall time and cost, or even less. What is bleeding the rest of the time and the cost on projects? Let's take a look.

### **The Cost of Executable Requirements**

The time and effort needed to get to executable requirements is a classic source of underestimation. By "executable", I mean having enough clarity and detail to the requirements that developers can take the ball and run with it. Many projects suffer from numerous "starts and stops" due to developers not knowing or understanding how to perform tasks due to unclear or incomplete requirements.

This translates to wasted time as the team scrambles to find the people who know the answers to the questions, or who can make the needed decisions. Meanwhile, development that should've been happening is not happening, and the estimate gets further and further from reality.

If you're on the "Waterfall" side, it means making sure all the requirements details are shored up in advance of development, including assets such as wireframes, data tables, or copy decks, and everything is concretely defined, including business rules, validation messages, input and output parameters, and so forth. This amounts to planning for what may be an intense and lengthy effort.

For this reason many prefer a more "Agile" approach these days, which takes more of a "just-in-time" approach to requirements, and generally has requirements definition and development as overlapping, rather than sequential work phases. Although they are both running at the same time, keep in mind that it only works if the requirements work stream is running at least one step *ahead* of the development work stream, so that the developers always have something ready to work on. If it is running one step *behind*, you waste time with the "start and stop" issues again.

For more context on requirements, and the effort involved, see [A Short Guide to Writing Software Requirements](/blog/a-short-guide-to-writing-software-requirements) and [How and When to Write a Requirements Document](/blog/how-and-when-to-write-a-requirements-document).

### **The Cost of Collaboration**

You can never completely get rid of problem-solving, research, and trouble-shooting in software development. It's the nature of the job. As such, everyday development is rife with trading emails, conversations in the hallway, brainstorming in front of whiteboards, reviews and meetings both impromptu and scheduled, and so forth. It's part and parcel of "getting things done", but it's a time sink, albeit a necessary one.

If a team of nine people meet for an hour to solve a problem, it's valuable, but it's still nine man-hours spent on something other than development. *That's* the cost of collaboration, as is every interaction required to get the job done. The more complex a project, the more collaboration is needed. Be sure to account for the time people need to spend interacting.

### **The Cost of Quality**

As mentioned earlier, quality means many things, and part of understanding its cost is to take an inventory of what it means for you. For me, it means:

- Architecture Planning
- Unit Test Development
- Writing Test Scripts
- Code Repository and Continuous Integration Setup
- Development, Staging, and Production Environment Setup
- Creating Deployment Scripts
- Code Reviews and Design Patterns
- Knowledge Transfer Sessions
- Error Logging and Messaging

...I could go on, but you get the idea. Each of these is a dedicated effort. Note that they form a "wrapper" around each development task that can be as significant of an effort as the development task itself.

If you are doing something novel or custom, you should also factor in time for:

- Research and Discovery
- Building Prototypes and Proofs of Concept
- Experimentation
- Troubleshooting

Furthermore, expect it to take *repeated effort* to reach a "ready to launch" status. Every project has bugs that need to be found and fixed, or revisions that will be asked for. It is an *iterative process*, with inevitable back-and-forth, and the more time is spent testing and reviewing things, the more issues may be found to deal with.

Tracking how many rounds of QA are needed or how many revisions are requested on a project is a fascination of mine. In my experience, requiring 8-10 rounds of QA (or 6-8 weeks) to knock out functional and design issues on a website launch is not unusual. On content-heavy website launches, I've recorded 70+ "tickets" of tweaks and revisions. Your mileage will vary, depending on the type of situation and the stakeholders you're dealing with (I like to call this variable the "Client Coefficient"). The QA/UAT process can easily incur the "other 50%" of project time and cost. Of course, anything you can do to "bake in" quality throughout the development process or review things in advance will help this go quicker.

### **The (Unexpected) Cost of Deployment**

A common mistake I see in estimates is assuming a quick and easy deployment, once the project is "done". This is sometimes the case; but other times, I have seen deployments cause an immense amount of last-minute trouble, and right when it's most inconvenient. Chalk it up to "Murphy's Law", but don't think it will never happen to you.

I've seen occasions when a particular bug or hardware problem related only to deployment was found right when a project was supposed to go "live"--and ended up needing days to troubleshoot, submit support tickets, or find workarounds, holding up projects that were "on track" up to that point.

Plan ahead by building out a checklist of deployment tasks, assessing each for risk, and allowing adequate time to perform them. Mitigate the risks by allocating time to set up staging servers, perform trial runs and put contingency and monitoring plans in place. In short, the more critical the deployment, the more thought should be put into its planning and estimation.

### **Find Risks and Uncertainties**

Assessing risk in general is a key part of estimating. Too often we assume "best case scenarios" without stopping to think about the things that might go wrong or cause difficulty. This doesn't mean we have to be pessimistic about everything, just that we should be realistic that *some* events out of our control are likely to occur, as well as *some* unanticipated difficulties. We have to be sensitive to when and where those risks are greatest.

Here are some potential sources of elevated risk and uncertainty:

- **Legacy code.**This includes code written by someone other than your current developers, or any old or deprecated technology which is still in service. Anywhere a lack of familiarity or currency exists, the chances of misjudging are high.
- **Code with technical debt.**Technical****debt is a serious issue, and every project manager and development team needs to recognize why and when it is incurred. If you suspect technical debt has been incurred in the past, remember it alway means extra cost and effort to pay down or deal with in the future.
- **Untried methods.**Any time you are trying something new which you haven't done before, consider the potential for required research, trial and error, and troubleshooting.
- **External dependencies.**If you are highly dependent on a third-party product, service, or vendor, consider the impact of a disruption, unexpected problem, or discovery that something is not supported. It may be cause for doing extra due diligence or planning for contingencies.
- **Volatile requirements.**If the requirements are subject to change quickly due to market unpredictability or an influx of new information. If it must be addressed now instead of later, time for retooling or refinement may be required.

You will need to analyze the specifics of your own project tasks to determine additional risks.

### **Buffer at the Task Level**

The estimate for a task should reflect its inherent risk and uncertainty. This can be difficult because we don't know, ahead of time, whether a particular task will go smoothly or not; how do we predict a specific outcome?

This is where buffering makes sense. In math and science, an analogous concept is the "confidence interval". It is the degree to to which a quantitative measurement may vary, generally expressed as a "+/-". In software development, we focus more on the "+" because our baseline estimate generally reflects the minimum level of effort needed for a task. It makes sense to add a reasonable confidence interval to this baseline if we want to ensure a high probability of falling within the estimate.

You can gauge this buffer based on your experience, or you can use a formula, such as the **50/90 method**. This method has you come up with two estimates for every task: what you consider to be a "baseline" estimate (i.e. an estimate you would expect to hit 50% of the time) and what you consider to be an "outlier" estimate (i.e. an estimate you would expect to hit 90% of the time, even in the face of some unexpected difficulties).

Once you have these, the 50/90 method uses a formula (using the concept of standard deviation and normal distribution) to find a value between these estimates that is a good in-between, from a probability perspective. Note how this is superior to simply "padding" an estimate; *it calculates the buffer for each task based on the amount of uncertainty inherent to that task*. Tasks with more uncertainty will naturally have a wider spread between their 50/90 values and get a bigger buffer vs. predictable tasks with a smaller spread between their 50/90 values. This is a more empirical and less arbitrary approach to buffering. To read more about how the 50/90 method works, I recommend reading Mike Cohn's writeup in his book [Agile Estimating and Planning](https://www.amazon.com/Agile-Estimating-Planning-Mike-Cohn/dp/0131479415/).

### **Use a Template to Explain the Estimate**

I've often seen project managers who supplied an estimate as a total number, or as hours by role, asked to explain themselves to shocked or skeptical stakeholders who don't understand why the estimate is so high.

The best way to handle this drama is to avoid it, which you can easily do if you are transparent with how the estimate was arrived at. The way to do that is to show an outline of how it all breaks down, particularly any "hidden tasks" that people may take for granted.

I generally build a template to do just that in either MS Excel or Project. Below are a few examples using MS Project.

These are fictional projects with fictional tasks, and simplified for the sake of brevity. However, they illustrate the basic idea. Here is a breakdown of activities by phases of the "SDLC":

![Software Task Breakout Example 1](/images/blog/a-short-guide-to-estimating-software-projects/estimate_example1.webp)

In this next example, I break down the back-and-forth "revision and review" process inherent to the typical requirements or design effort. This captures some of the "cost of collaboration" and is important when the number of "rounds" it takes matters:

![Software Task Breakout Example 2](/images/blog/a-short-guide-to-estimating-software-projects/estimate_example2.webp)

Finally, whenever incremental variables affect the estimate, I always prefer to itemize them out rather than batch them together. That's because they represent "variable costs" and and I don't want them to be misinterpreted as "fixed costs".

If your estimate is contingent on how many website pages you're building, for example, or how many customers you're supporting, or anything that could be added to at the last minute, whether intentionally or not, you need a rationale for why it affects the estimate. Listing things out makes it clearer what the estimate does and does not include:

![Software Task Breakout Example 3](/images/blog/a-short-guide-to-estimating-software-projects/estimate_example3.webp)

The actual estimates for each line could be in hours, days, or even weeks, that is for you to decide. The point is that the more you can do to do make your estimate easy to understand at a glance, the more efficiently you can get through the presentation and acceptance process.

### **Deal with "Parkinson's Law" by Delivering More Than Expected**

"Parkinson's Law" goes like this: "Work expands to fill the time allotted for its completion." Flipped around, it means if we allow *too much* time to complete a task, we realize less productivity than was possible. This is a real fear for organizations trying to hit aggressive targets.

It contributes to planning fallacy, because it makes us worry about *overestimating*, and the potential waste that will occur if we do. The fact is, most of the time we *think* we're overestimating, we're actually underestimating; but in the case that we do, we should turn it into a benefit instead of a liability.

We can do that by setting "stretch goals" for the estimate that are not promised, but will be delivered as "extras" if time permits. In other words, any overestimation should be used to **deliver more than what was expected**. This could be in the form of extra features, extra "polish" to features, or even just launching early. If the estimate turns out to be adequate only for the original scope then no harm is done; but if you do manage to perform under the estimate, then consistently providing additional value is the way to prove to everyone that they need not worry about Parkinson's Law.

## Defending the Predictive estimate

If there's one truism about estimates, it's that someone always wants them to be lower, and you may feel pressured to do that. Your analysis will be for nought, however, if you modify your estimate under duress because someone had a poor reaction to it. To avoid this fate, it is best to be prepared for it in advance. This means having a plan for when your estimate gets a "no", as well as understanding how to say "no" to unwise concessions.

To effectively navigate such conversations, you must not take anything personally. Take it as a rational debate on specific concerns, and nothing more. Do not fall into the trap of thinking that arguing your side means acting or coming across as belligerent, unpleasant, or self-centered. It's quite the opposite. By defending your estimate you are actually proving that you care about all parties. If you are truly interested in the project being a success, than defending a good estimate is a sacred trust. Basically you want to do four things:

### **1. Establish trust and credibility.**

First, you need to convince others that you really are trying to estimate objectively, with the success of the project in mind, and that your method makes sense. Don't feel bad if others imply that you must prove this; it's all part of the game when time and money are at stake.

This is where all the analysis you've done becomes useful a second time; just walk everyone through it. When you show everyone exactly how your estimate breaks down, and explain the rationale behind each part, it will put people at ease. Just seeing the details and hearing a strong explanation is convincing enough for most. If there is disagreement in an area, you should discuss it point by point instead of arguing over the estimate as a whole.

### **2. Stand for quality and learn to explain it.**

A big part of getting on the same page is about agreeing on a quality standard and the level of effort necessary to reach it. What often happens is that stakeholders either haven't considered or don't understand the amount of extra time and work involved to reach the quality level they desire. This can lead to vastly different perceptions of how long something should take.

First, be ready to stand for whatever minimum level of quality you feel is the responsible choice for the project. Second, learn to explain, in clear terms, what is involved to reach that level of quality so that others understand. Third, if cuts have to be made that you know will impact quality, ensure those are communicated, understood, and accepted as a tradeoff.

### **3. Acknowledge and offer options.**

Getting an estimate that was bigger than expected is par for the course. Don't let it stop things from moving forward. The stakeholders want to feel like they are in control of the project, and you take that feeling away if you take an "all or nothing" stance with the estimate. Instead, acknowledge the stakeholder's concerns or constraints, and provide options. Offer them tradeoffs based on scope, assumptions, or deadlines. If things start sounding unreasonable, clarify and review in detail the quality expectations; sometimes that is needed for them to realize it.

### **4. Focus on a shared interest in project success.**

What happens if you concede to an estimate that you know in your gut is risky? Remember that planning fallacy occurs even when people think they've made a *good* estimate. If you *know* you made a risky estimate, odds are you have really set yourself up for trouble. Let's take an inventory all of the possible consequences; missed deadlines, money problems, broken relationships, burnt out developers, poor quality, unsuccessful product launch, loss of business, loss of reputation, low morale--did I leave anything out?

None of that is good for either you or your client or stakeholder. Therefore your attitude towards estimating should always be about making the project successful. Once people see that you have their interests in mind, you can move away from a negotiation mindset to a mindset of collaborative problem-solving--which is where you wanted to be all along.

I think we can agree these four steps are straightforward. However, since negotiation skills are usually not taught in companies, it will be incumbent on you to develop your own skills in this area. For further reading, a good book I recommend is [The Power of a Positive No](https://www.amazon.com/Power-Positive-No-Relationship-Still/dp/0553384260) by William Ury.

## Estimating: The Agile method

Imagine you are driving a car cross-country to someplace you've never been, and your speedometer is broken. All you know is that you have to cover 1000 miles to reach your destination, and the only gauge that works reliably on your car is your trip meter. How can you estimate how long it will take you?

Simple math can help. Check your watch, drive for 100 miles according to your trip meter, then check your watch again. You now know about how long it takes to drive 100 miles. Since you have 900 miles left, multiple this time by 9 and you have a decent estimate for the remainder of the trip. To get more accurate as you go along, take the running average after 200 miles and apply it to the next 800, and repeat the pattern every 100 miles.

Notice how much easier this is than if we tried to *predict* our average speed. We cannot reasonably expect to maintain the same speed throughout the trip. Instead we have to consider many variables such as:

- The percentage of freeways vs. interior roads and their various speed limits.
- The occurrence of school zones, construction zones, and accidents.
- Areas of rush hour traffic.
- Bathroom breaks and stopping to eat.

...and so on. If we need to give the time of our arrival based on a predicted speed, it's going to be difficult to guess correctly. On the other hand, if we take an empirical approach, as we do by *measuring* our progress and *deriving* our speed, we can forecast a more likely arrival window.

This is the essence of the Agile approach. It seeks to bypass planning fallacy by focusing on observable results. The key is to measure and quantify how much work you can get done in a set amount of time. Once you have that figure, you can build a projection of how long the full project will take. Here are the high level basics for doing that:

### **Establish a "Time Box" For Fully Completing an Amount of Work**

Popularly called a"sprint", we need a consistent length of time to use as our "divisor" for measuring our productivity. Usually set between 30 days to 2 weeks, the question is not "how much work do we think we can get done" in a sprint, but "how much work *did* we get done?" in a sprint. This measurement gives us our "working speed", or *sprint velocity*, which we can use to calculate our "completion window" for the full project.

Note that in order to measure this accurately we need to carefully define what "done" means. If we base our measurement on work that's only partially, but not completely done, than we overestimate our true velocity and its real value becomes hard to determine. The recommendation is that the work from a sprint should be so complete that it results in working code that is "ready to deploy".

### **Make the Requirements Granular and Size It Using User Stories**

We need to do more than simply track the "hours" spent working on requirements. We need to determine *how much* requirements we can get to "done" within the timeframe of our sprint. The key to doing that is to break the requirements into *measurable units*and to determine how many of those units we can complete each sprint.

The first step is to make the requirements granular; this can be done by breaking them into user stories (as described in [A Short Guide to Writing Software Requirements](/blog/a-short-guide-to-writing-software-requirements)). This way we can measure how many user stories we are getting done each sprint.

However, user stories are not all the same level of effort; some are bigger or smaller than others. To compensate for this fact, we need to estimate, not how long it will take to complete each story, but rather, the *relative size* of each story by comparing them to each other.

To be useful for measurement purposes, we need to do it quantitatively. One technique is to assign each story a rank or score in terms of points, called "story points". The story points should represent relative *scale.*In other words, if a particular user story has a score of "1", then a story that is twice as big should get a "2", and a story four times as big should get a "4". Different combinations of stories that add up to the same number of points should represent similar levels of total effort. Using a consistent set of story point assignments helps standardize the estimating process. The most popular method is to use the "Fibonacci" sequence, which is to use the following set of numbers: 1, 2, 3, 5, 8, 13, 21. Other number sets are possible to use, but it helps if the gap between points is enough to clearly differentiate levels of effort, yet not so big that story sizes can be vastly different. Any story greater than 21 points should be subdivided into smaller stories if possible.

When assigning story point values, one should consider the same costs, risks, and uncertainties we looked at in predictive estimating. If a story has a fair amount of uncertainty, for example, or will require a lot of testing, or has a complicated deployment, those are all reasons to bump up its story points. This is why estimating story points is not just the domain of the developers, but the responsibility of an entire cross-functional team, which can assess *all* the considerations for sizing a story, beyond just "coding".

### **Story Points are an Abstraction Layer**

Story points are essentially an "abstraction layer" between *how we big we think a story is* and *how long it actually takes*. For example, let's say that we think a story will take 100 man-hours. Given the odds of planning fallacy, let's say it actually took us 150 hours to complete, when all is said and done. If you keep estimating each story directly in hours, you are likely to make this error every time.

On the other hand, let's say we gave this story 5 story points. We thought 5 story points equaled 100 hours, but it looks like 5 story points really equals 150 hours. In fact, however, we don't even need to keep track of how many hours it took. We just need to keep track of how many story points *we actually completed* within a sprint. However many story points that was, it was logically equivalent to however many man-hours we had to spend.

Thus, even though a story point is an approximation, it's useful IF we use it as a mechanism to mitigate planning fallacy. It is then a matter of being consistent with our story point estimates, and measuring how many story points we can complete in a sprint, by adding up the points for all the stories completed within a sprint. This is our "sprint velocity", which we can use as a reasonably empirical measurement of how much we can accomplish in future sprints.

### **Measure and Calibrate**

There are a few things to keep in mind when calculating sprint velocity. First, only completed stories should count towards sprint velocity; giving "partial credit" for "partially completed" stories should be avoided; we are trying to measure how long it takes to**"get to done" which means only counting that which made it across the finish line.

Additionally, we should avoid consistently having incomplete stories "roll over" from one sprint to the next. That indicates planning fallacy, because it means we are *overcommitting* to the amount of work we think we can complete each sprint.

Rather, our goal is to always complete whatever work we committed to for the sprint (if any time is left over, we should deliver "extra", just as with the predictive method); this is the definition of an accurate estimate. Therefore, once we have determined our sprint velocity, we should use it as a guide for what we commit to each sprint.

Note that I used the word "commit" because the amount of stories taken on for a sprint should be a team decision, rather than simply assigned from "on high". If work is simply assigned, it negates the empirical method, and usually results in overcommitment. Sprint velocity represents observable evidence as to how much should be taken on in the next sprint, unless the team believes there are special circumstances why they may be able to accommodate more or less work.

In other words, *future estimates should be calibrated against past results*. This is the point of measuring and using sprint velocity. With that being said, realize that it will take some time to "settle" in on your average sprint velocity.

In the beginning, we don't know what our sprint velocity is, because the project has no past history. The first few sprints are *experimental*; the team picks a number of story points for the sprint that seems reasonable, then measures how many were actually completed at the end of it; as such don't expect the first few sprints to be perfect, but take them as *learning experiences* for the rest of the project.

It takes some time to dial in estimating story points as well. Eventually, you want to establish common benchmarks for how big a 3 point or 5 point story is, for example, by using past stories for comparison. It may take a few sprints to get there, while the team "fine-tunes" their sizing assessments. If you stick with it however, the Agile method results in remarkably reliable predictive ability. The key is that time and cost for a project are estimated in terms of how many sprints are needed to complete a project. The length of one sprint becomes the unit of estimate "granularity" because it is the measurement by which everything is based.

### **Avoid turning Agile estimating into Predictive estimating**

Sprint velocity is a good guide, but keep in mind it's an approximation. As such it may vary from sprint to sprint; it may change over time; and it is affected by context. The great benefit of using it, however, is its likelihood to be more accurate than a purely predictive estimate, because it takes real-world results into account, instead of relying entirely on judgment. This reduces the chances of severe underestimation, as sometimes happens with predictive estimates.

However, if misused, sprint velocity can lead to familiar problems. First, sprint velocity should never be artificially inflated; this can occur if people try to make it "look better" by forcing more work into a sprint or by exaggerating the size of the stories in a sprint. This manipulation works against its usefulness at preventing planning fallacy, which is the reason for using it in the first place.

We should also be careful of projecting too far out using current or historical sprint velocity. This is because the more we assume our sprint velocity will stay constant over time, the more our estimate becomes *predictive* instead of *empirical*. How do you know your sprint velocity will remain the same many sprints from now--or even next sprint? The answer is you don't. This means several things:

- The greater the number of sprints you project ahead, the more approximate the estimate. Thus, if you are projecting far ahead to establish a project completion date, it behooves you to plan conservatively or to define a confidence interval, such as +/- 1 sprint, to reflect the potential variability in sprint velocity.
- We should always update our average sprint velocity as well as our project plan whenever a sprint is completed, and we have a new velocity measurement to factor in.
- We should treat sprint velocity as a guide rather than a rule, and temper it with team judgement when committing to how much work we will take on in a sprint.

To this last point, there are legitimate reasons for a team to decide they can take on more or less work in a sprint than average sprint velocity would suggest. Consider just a few ways this can be dynamic:

- Someone may be going on vacation, reducing the work capacity for the current sprint.
- Coding productivity might have improved due to a learning experience from the previous sprint, making the team feel comfortable with taking on additional tasks.
- A change in team composition occurred, making the team a little more cautious for the current sprint until they determine the impact of the change.
- A new software tool was implemented that is helping everyone be a lot more productive, raising their judgment of how much work they can accomplish.
- Network problems have recently been hobbling the team with connectivity issues, lowering their productivity expectations.

...And so on. In other words, while sprint velocity is a good "baseline", there is always a place to exercise one's judgement on a case-by-case basis.

### **Ensure that sprint velocity reflects a "sustainable pace".**

One problem is that people interpret the word "sprint" as meaning it should be an "all out race" to get the "maximum amount of work done in the minimum time". This is entirely incorrect, and an unfortunate connotation. Sprint velocity should never be based on a rushed effort, which will inevitably lead to gaps in quality.

Rather, sprint velocity should be based on a "sustainable pace", which reflects a velocity that:

- The team can sustain indefinitely without burning out from overwork;
- Includes adequate time to produce the desired level of quality, including time for quality practices and quality testing;
- Includes adequate time for the collaboration necessary to produce a well crafted deliverable.

In other words, the same things we thought about when coming up with a good predictive estimate also factor into determining a good sprint velocity. If you are unhappy with the quality of deliverables from a sprint, it may mean you over-committed to the number of story points you took on. Making an adjustment to the sprint velocity may make sense, even if means adjusting expectations or convincing the team to reduce their commitment.

To not do so puts you at risk of the "Bad Agile" situation I mentioned in [What Agile Software Development Really Means](/blog/what-agile-software-development-really-means). This is prone to happen if you rush development to the point that notable bugs or other quality issues exist with items supposedly "completed" in a sprint. What will happen is that time on future sprints will need to be spent fixing bugs incurred on prior sprints, reducing your sprint output. If you let this pattern continue, you will eventually spend a large part of each sprint cleaning up old issues instead of working on new stories, effectively killing both your "Agility" and productivity.

### **Further Reading**

What I've covered here is just the gist of the Agile approach; there are many more distinctions and concepts to learn, including how to perform sprint planning, how to "groom" the backlog in preparation of a sprint, when to break out tasks for user stories, and more. If you're ready to embrace the Agile approach, two good references to start with are [The Scrum Guide](https://www.scrum.org/resources/scrum-guide) by Ken Schwaber and Jeff Sutherland, and [Agile Estimating and Planning](https://www.amazon.com/Agile-Estimating-Planning-Mike-Cohn/dp/0131479415/) by Mike Cohn.

## Go make a better World!

In my mind, better estimating is one of the key differences between being a professional or an amateur in the software development world. But it's about much, much more than our individual projects or performances. Poor estimates inevitably result in a poor life experience for *everyone*, whereas good estimates have the reverse effect. Here are just a few of the byproducts of being able to estimate well and being able to hit those estimates:

- A better and more successful career
- Happier, more satisfied customers
- A happier and less stressful work environment
- Team members can afford the time and energy to do their best work
- A more competitive company with an enhanced reputation
- More profitable projects

...And more. This is one of the reasons I've personally been obsessed with estimating for well over a decade, and even now, I keep trying to get better at it. If a little bit of that has rubbed off on you, then I feel writing this article was worth it.

Of course, I see it turned out to be longer than anticipated even though I promised it would be a "Short Guide". Looks like my old friend "planning fallacy" got me again!
