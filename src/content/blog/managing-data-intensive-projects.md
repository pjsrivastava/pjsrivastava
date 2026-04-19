---
title: "Managing Data Intensive Projects"
pubDate: 2020-04-09
topic: "Project Management Nuts and Bolts"
---

Many projects today have considerable data requirements. Sometimes it is obvious, because data drives the functionality of an application, but other times the focus is on other design aspects because the data needs seem straightforward and are assumed to be simple.

This a risky assumption. Data tends to be a more involved affair than we think. We also tend to underestimate how much our project is dependent on data and will organized that data must be. There is a surprisingly large number of projects to which this applies. Data features highly in everyday projects that involve event calendars, ecommerce, map searches, product configurators, directories, charts and graphs, reporting features, mailing lists, and so on.

Projects like these are simple in theory.  However, if the functionality is non-trivial, the data requirements tend to be non-trivial as well.

On projects like this, we tend to optimistically assume that we'll handle the data aspects when "we get to them." That’s sooner than we think, because determining the data requirements is a precursor to actually architecting the system. It's crucial to determine early what type of data we need, how much there is, what we're going to do with it, and where we will get it from.

Once we dive into this, it's not uncommon to be surprised by how ornery data can be. Often our expectations of what we will be able to do must be re-aligned, and our underestimation of the work involved is revealed. Over and over again, I’ve heard frustrated clients utter something similar to the following:  “Why is this so hard? It should be simpler than this!!”

Let’s take a look at some of the reasons.

## **1. There is more data than you think.**

The sheer quantity of data is sometimes underestimated--by a large factor. This may be the case because the data isn’t analyzed or inspected in any great detail until it’s time to work with it. Data is a multi-dimensional thing, where depth and inter-relationships add to its mass. Attributes, for example can become very complex for even simple objects. Take e-commerce. Even simple products may require a short description, long description, thumbnail image, large image, regular price, sales price, and product category. That’s just the tip of the iceberg. There may be product variants, options, colors, sizes, related accessories, and--you get the idea—I could rattle off dozens of more attributes found in everyday e-commerce. That’s a *lot* of data to put together, especially if you have a lot of products.

Attributes increase data size geometrically, but *combinations* of attributes increase it *exponentially*. In one notable case, a client tasked us with creating a product configurator, which on the surface, appeared to only consist of a few components. Their early estimate of the total number of combinations was in the low thousands. Upon closer inspection of the data, we realized there were variations *within* each component, which increased the number of combinations to the high tens of thousands! Such a magnitude of underestimation may occur when looking at data at purely the surface level.

## **2. Gathering the data is harder than you think.**

If you’re lucky, the data you need already exists, and is conveniently in one place. More likely, however, the data that exists must be culled from different places, and then combined with still more data that must be created. Having been through this scenario many times, I know how difficult these logistics can be. Getting access to the data alone may be tough if you need assistance from someone who is already busy and not a stakeholder in your project. You may need to coordinate further help to interpret, combine, or clean the data, which may result in more delays. Things get even dicier when it comes to *creating *data—that usually turns out to be more work than people realize, and it’s not unusual to suddenly stop hearing from the folks who have to do it!

Simply put, the data we need is rarely served up on a silver platter, and it requires significant effort to coordinate the collection, production, and combination of it all. I’ve seen cases where we built a nice admin and front-end for inputting data into a system, only to see the project get stalled for months waiting for all the data to come in, then eventually canceled altogether. Don’t let that be you!

## **3. The data you need doesn’t match the data you have.**

I’ve routinely seen the *need *for creating data downplayed because some system already exists that “has the data we need”. I’ve also found, after closer inspection, this assumption is usually only partially correct. The classic example is tying into an inventory system to display products on a website. The inventory system already has the data we need! All we need to do is tie into it and we’re golden! That’s the thought anyways—the reality is that inventory systems are designed for their own purposes, and not for the experience we desire on websites.

Going back to data attributes, we often find many that not only do not exist in the inventory system, but have no way of existing in it without re-architecting it (which is far from likely). This may include a photo gallery for each product, available options, related products, marketing descriptions, and so on. Since the data is not there to begin with, that may require a significant amount of data creation and data entry. We’re also faced with possibly creating a second database to hold this additional data. How will it be combined with the inventory system data? If a full copy of all data is held in a second database, how do we synchronize updates with inventory system? It doesn’t take much to realize that the data entry requirements and integration complexity is more than was bargained for. Be circumspect towards casual claims that you already have the data!

## **4. The data needs more cleanup than you think.**

Data is often messy--but databases are incredibly finicky. Take phone numbers. They could be entered as “(800) 555-1212”, “800-555-1212”, or even “800.555.1212”. Or you might not enter one at all (resulting in a NULLvalue) or you might have one with no separators such as “8005551212”. When you’re importing data from someplace else, there’s no telling what you’ll find. Slightly different formats, minor typos, or extra spaces or characters can all cause problems when your database is expecting things one way and gets another. Unless workarounds are put in place, small discrepancies and inconsistencies can easily cause failed database imports, code to break, and business logic to go haywire.

Imagine we needed to write code that grouped and counted phone numbers in a database according to area code.  To get the area code we could just strip out the first 3 digits of the phone number, right? If some phone numbers are entered with parentheses, however, like “(800)”, we have a problem. We can solve it by either writing extra code to recognize and deal with that, or we can go through the data and reformat any phone numbers with parentheses. This is a small example of a simple format issue, and by itself, no big task. But multiply this across hundreds or thousands of data fields and records, and dozens of types of formats, and the work to do cleanup, workarounds, and validation can be substantial.

## **5. The data needs more restructuring than you think.**

An even bigger issue is when the data we are given is improperly structured for its intended use. Those who are given their data in spreadsheets, or as flat files from legacy systems, know this all too well. This realization is often lost on those who don’t understand database concepts such as normalization and unique identifiers and so forth—that raw data often requires a fair bit of chopping, re-arranging, and optimizing before it can be used in a sophisticated manner. The fact is, shaping and structuring the data is as much a part of development as writing code is. More often than not, the data we are given to work with will need to be transformed before we can use it effectively.

The more flexible and efficient you want your system to be, the more work will be required here. Part of this is about optimization and efficiency; that alone calls for removing redundancies from your data and arranging it into segments and defining lookups and indexes within it so that it may be queried efficiently.  If you want your data to be grouped in certain ways for reporting purposes, or if you want to be able to pull out specific data elements that are joined together in one field, there will be legwork involved to make that possible. The more you want out of your data, the more work will need to go into it.

## **6. The business rules around your data are more complex than you think.**

Organizations tend to take the complexity of their own operations for granted. When describing their business rules at a high level, things often seem simple and straightforward. Once we get down to the detail level however, we tend to discover a cornucopia of “special cases” and “extras” that require accommodation in not just the code, but also the data.

These may be simple things which impact how data is to be updated, deleted, and archived, and the relationships between types of data. The more complex the relationships between things can be, the more robust the data structure required. There are almost always examples of “the available options depend on compatibilities between what a user has selected”, or “different products have different sets of attributes” or “all users belong to a single region, except for these users, which belong to two regions and have special rules which apply to them.” Such details may be casually mentioned as an “afterthought”, but they may require substantially more effort in developing the data structure!

## **7. The available API is more limited than you think.**

The increased availability of APIs that provide a bridge to third-party systems is a positive development. Thanks to web services and standards such as SOAP and REST and formats such as JSON and XML we no longer have to worry about developing custom methods for integrating completely different database systems together.

Nevertheless, APIs are not panaceas, and finding that one exists does not mean your worries are over. APIs are often developed by a vendor as a late addition to a system, and tend to be limited, both for the sake of security as well as ease of development. Clients are often disappointed that they cannot pull back as much data from an API as they would like, and the amount of data they can write to the other system is also constrained. You will find yourself shoehorned to whatever schema and format the API is based on, irrespective of how you would like your own system to function. In the end, APIs are useful, but they will dictate more of your data capabilities than the other way around.

## **What you don't know WILL hurt you.**

I’ve found that many clients don’t appreciate the complexities of dealing with data until they’ve been through it at least once (and possibly torn much of their hair out!). Especially for those from the marketing and business side, who prefer to deal with things conceptually, it can be an eye-opening experience to wade through the data intricacies involved in turning their ideas into reality. Hopefully I’ve given you something to think about as you go into these types of projects.
