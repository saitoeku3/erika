import { Twitter } from "./deps.ts";
import { keys } from "./src/constants.ts";
import { Erika } from "./src/erika.ts";

const twitter = new Twitter(keys);
const erika = new Erika(twitter);

const followers = await erika.readFollowers();
await erika.followBack(followers);

const tweets = await erika.readTimeline();
await erika.reply(tweets);
