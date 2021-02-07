# RentTogether.online
Home Screen           |  Creating a Group |  Add a Bill |
:-------------------------:|:-------------------------:|:-------------------------:
![](https://i.imgur.com/r9ZAzzk.png)  |  ![](https://i.imgur.com/xkN3G1K.png) |  ![](https://i.imgur.com/xkN3G1K.png)

## ✨Inspiration
Our inspiration was ours and those around us living with roommates. When it comes to dividing expenses and making sure payments are on time, we find it difficult to keep track of dates and who is up-to-date on the bills.

## 📜What it does

RentTogether is a mobile app that allows you to create a group with your roommate(s) or partner, letting you keep track of your bills, and contributions of each member of the group. Members of a group will be reminded to pay their part of the bills before the due date (push notifications), and will be able to do it through the app without any effort.

## 💻How we built it
<b>Back-end:</b> Node.js, Express, CockroachDB, Sequelize

<b>Mobile App:</b> Flutter (Dart) - Available for both iOS and Android

We connected the Plaid API to allow users to connect their bank accounts to our platform, allowing transfer of funds without having to change apps at all (this is all done over Plaid, it’s secure!). We would have loved to use something like Interac, but fortunately, Plaid API was the exact alternative we needed since Interac isn’t available for public use :)

Firebase was utilized for authentication and sending push notifications to devices.

To deploy our platform, we used Google Cloud Platform (thanks MLH for the credits!), specifically Google Cloud Storage to host the attachments for the bills and App Engine to host our back-end API.

## 🤯 Challenges we ran into

Let’s just say, relationships between entities can sometimes get complicated. We’re not experts when it comes to data in general, so we had a difficult time trying to make sure the relationships between entities were correct.

## 🥳Accomplishments that we're proud of

Wishing we could use something like Interac, we scoured the internet for an alternative which was...🥁🥁….. Plaid. We were really proud of ourselves in understanding the API within the limited time we had, then even implementing it to function with our app.

## 👩‍🎓What we learned

* How to stay up for 36 hours without any sleep

* Yelling at each other while fixing a bug fixes it faster

* How to utilize Firebase Notifications to send important notifications to users

* 2x faster at deploying using Google Cloud compared to our previous hackathons ⌚

* Value of different perspectives and experiences while fixing bugs. This allowed us to understand where our errors were and how to approach them with creative solutions.

## 🤔What's next for RentTogether?

* Integrate an option for couples to set their salaries and the app helps them calculate what’s their equivalent part of the rent based on their earnings.

* Allow members to contribute a small amount towards their contribution (installments)

* Introduce landlords to the platform so they can receive payments directly, however they wouldn't be able to see any bills other than the rent.

* Household goals. Allow groups to set a common goal, like buying a new couch and they can set expected contributions by specific dates.

## 💻Installation

To setup the back-end locally, please proceed with the steps below

1. Run ```npm install```
2. Create a directory called ```certs``` and place the ```cc-ca.crt``` file (provided in the Discord)
3. Download the ```firebase_credential.json``` and ```storage_credentials.json``` files from the Discord
4. Include them in the ```certs``` directory as well.
3. In the project directory, create a ```.env``` file to include our database information. Example below:

```
# Database Info
NODE_ENV=development
DB_HOST=
DB_PORT=
DB_USERNAME=
DB_PASSWORD=
DB_DATABASE=

# Plaid Info
PLAID_TEST_TOKEN=
PLAID_SECRET=
PLAID_CLIENT_ID=
PLAID_ENV=sandbox

# Google Cloud
GCLOUD_STORAGE_BUCKET=
```

3. Run ```npm run dev```
Voila! The back-end should be up and running
