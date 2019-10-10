/*
Get Bible verses or passages in text, json, or xml format from the labs.bible.org API
http://labs.bible.org/api/?passage=Luke%2010:14-25&type=json
*/

const luke10 = [
  {
    bookname: "Luke",
    chapter: "10",
    verse: "14",
    text:
      "But it will be more bearable for Tyre and Sidon in the judgment than for you! "
  },
  {
    bookname: "Luke",
    chapter: "10",
    verse: "15",
    text:
      "And you, Capernaum, will you be exalted to heaven? No, you will be thrown down to Hades! "
  },
  {
    bookname: "Luke",
    chapter: "10",
    verse: "16",
    text:
      " \u201cThe one who listens to you listens to me, and the one who rejects you rejects me, and the one who rejects me rejects the one who sent me.\u201d "
  },
  {
    bookname: "Luke",
    chapter: "10",
    verse: "17",
    text:
      "Then the seventy-two returned with joy, saying, \u201cLord, even the demons submit to us in your name!\u201d "
  },
  {
    bookname: "Luke",
    chapter: "10",
    verse: "18",
    text:
      "So he said to them, \u201cI saw Satan fall like lightning from heaven. "
  },
  {
    bookname: "Luke",
    chapter: "10",
    verse: "19",
    text:
      "Look, I have given you authority to tread on snakes and scorpions and on the full force of the enemy, and nothing will hurt you. "
  },
  {
    bookname: "Luke",
    chapter: "10",
    verse: "20",
    text:
      "Nevertheless, do not rejoice that the spirits submit to you, but rejoice that your names stand written in heaven.\u201d "
  },
  {
    bookname: "Luke",
    chapter: "10",
    verse: "21",
    text:
      "On that same occasion Jesus rejoiced in the Holy Spirit and said, \u201cI praise you, Father, Lord of heaven and earth, because you have hidden these things from the wise and intelligent, and revealed them to little children. Yes, Father, for this was your gracious will. "
  },
  {
    bookname: "Luke",
    chapter: "10",
    verse: "22",
    text:
      "All things have been given to me by my Father. No one knows who the Son is except the Father, or who the Father is except the Son and anyone to whom the Son decides to reveal him.\u201d"
  },
  {
    bookname: "Luke",
    chapter: "10",
    verse: "23",
    text:
      "Then Jesus turned to his disciples and said privately, \u201cBlessed are the eyes that see what you see! "
  },
  {
    bookname: "Luke",
    chapter: "10",
    verse: "24",
    text:
      "For I tell you that many prophets and kings longed to see what you see but did not see it, and to hear what you hear but did not hear it.\u201d"
  },
  {
    bookname: "Luke",
    chapter: "10",
    verse: "25",
    text:
      "Now an expert in religious law stood up to test Jesus, saying, \u201cTeacher, what must I do to inherit eternal life?\u201d ",
    title: "The Parable of the Good Samaritan",
    titles: ["The Parable of the Good Samaritan"]
  }
];

const fullPassage = luke10.reduce((passage, verse) => passage + verse.text, "");
console.log(fullPassage);
