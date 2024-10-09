import saynang from "../assets/saynang.mp3";
import orange7 from "../assets/Orange7.mp3";
import neverforget from "../assets/neverforget.mp3";
import constell from "../assets/constellation.mp3";
import { Track } from "../types";
import { v4 as uuidv4 } from "uuid";

const id = uuidv4().slice(0, 10);

export const songLists: Track[] = [
  {
    id: 1,
    images:
      "https://t2.genius.com/unsafe/252x252/https%3A%2F%2Fimages.genius.com%2F2a742e12eb71856bc273e3777130696b.1000x1000x1.png",
    title: "星座になれたら",
    singer: "Kesouku Band",
    audio: constell ,
  },
  {
    id: 2,
    images:
      "https://i.pinimg.com/564x/b5/25/ca/b525cafaa10f9dfbfcbd19c2718a3464.jpg",
    title: "アイン",
    singer: "Nino",
    audio: saynang,
  },
  {
    id: 3,
    images:
      "https://i.pinimg.com/564x/e4/8e/42/e48e424fbdf55e605d4fe873de49276c.jpg",
    title: "テイン",
    singer: "Nino",
    audio: orange7,
  },
  {
    id: 4,
    images:
      "https://i.pinimg.com/564x/95/21/53/95215324bc6f145240582f0e58cb5dfd.jpg",
    title: "忘れてやらない",
    singer: "Kesouku Band",
    audio: neverforget,
  },
  {
    id: 5,
    images:
      "https://i.pinimg.com/564x/7f/c6/b8/7fc6b8a4291b7acd7d959ec0dcce16f6.jpg",
    title: "アイン",
    singer: "Yui Yuigahama",
    audio:
      "https://p.scdn.co/mp3-preview/83bac988441bd8d4dc94421d12fb62efc6534f8f?cid=5bbfc9b0510d4a2dbc99c5d0e20d26ba",
  },
];
