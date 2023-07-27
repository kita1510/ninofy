import chimuonbenem from "../assets/chimuonbenem.mp3";
import saynang from "../assets/saynang.mp3";
import orange7 from "../assets/Orange7.mp3";
import neverforget from "../assets/neverforget.mp3";
import { Track } from "../types";
import { v4 as uuidv4 } from "uuid";

const id = uuidv4().slice(0, 10);

export const songLists: Track[] = [
  {
    id: 1,
    images:
      "https://i.pinimg.com/564x/7f/42/08/7f4208fed16f7c97306dbb0ff992d3d1.jpg",
    title: "Candy Pop",
    singer: "Yui Yuigahama",
    audio: chimuonbenem,
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
    audio: chimuonbenem,
  },
];
