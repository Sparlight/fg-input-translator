import { Dash, IstantAirDash } from "./index";
export const techPatterns = [
  {
    name: "Gatlings",
    input: "gatlings",
    type: "mech",
    regex: /gatlings/,
    description:
      "Sequence of inputs that chain into one another easily. Check a guide to your character or game to see some examples.",
    img: "",
    moreLink: "https://glossary.infil.net/?t=Starter",
    moreName: "Glossary",
  },
  {
    name: "Starter",
    input: "gatlings",
    type: "mech",
    regex: /starter/,
    description:
      "The first hit or combo before going to the main combo. Check a guide for your character to see some examples.",
    img: "",
    moreLink: "https://glossary.infil.net/?t=Starter",
    moreName: "Glossary",
  },
  {
    name: "Corner",
    input: "gatlings",
    type: "mech",
    regex: /starter/,
    description:
      "The far left and far right edges of the screen in a 2D fighting game. Combos with this notation usually means you should ",
    img: "",
    moreLink: "https://glossary.infil.net/?t=Corner",
    moreName: "Glossary",
  },
  {
    name: "Land",
    input: ["▷", "land"],
    type: "mech",
    regex: /▷|land/,
    description: "Player must land at that point in the sequence.",
    img: "",
    moreLink: "",
    moreName: "",
  },
  {
    name: "Tiger Knee",
    input: "tk",
    type: "mech",
    regex: /tk/,
    description:
      "A method to perform a special move in the air as fast as possible after you leave the ground. For example, in a 236P motion you would make 2369P.",
    img: "",
    moreLink: "https://glossary.infil.net/?t=Tiger%20Knee",
    moreName: "Glossary",
  },
  {
    name: "Delay",
    input: ["dl.", "delay", "slight delay"],
    type: "mech",
    regex: /dl\.|dl|delayed|delay|slightdelay/,
    description: "Delay the following move.",
    img: "",
    moreLink: "",
    moreName: "",
  },
  {
    name: "Whiff",
    input: ["whiff", "(whiff)"],
    type: "mech",
    regex: /whiff|\(whiff\)/,
    description: "Whiff (not hit) the following move.",
    img: "",
    moreLink: "",
    moreName: "",
  },
  {
    name: "or",
    input: ["/", "or"],
    type: "mech",
    regex: /\/|or/,
    description: "Execute the left or right command.",
    img: "",
    moreLink: "",
    moreName: "",
  },
  {
    name: "Dash",
    input: 66,
    type: "mech-icon",
    regex: /66|dash/,
    description: "",
    img: <Dash />,
    style: {},
  },
  {
    name: "Back Dash",
    input: 44,
    type: "mech-icon",
    regex: /44/,
    description: "",
    img: <Dash />,
    style: { transform: "scaleX(-1)" },
  },
  {
    name: "Homing Jump",
    input: "homing jump",
    type: "mech",
    regex: /homingjump/,
    description:
      "Dust attacks will launch the target in the air. Homing Jump is when you jump right after the attack connects.",
    img: "",
    style: "",
    moreLink: "",
    moreName: "",
  },
  {
    name: "Double Jump",
    input: ["88", "dj."],
    type: "mech-icon",
    regex: /88|dj\./,
    description: "",
    img: <Dash />,
    style: { transform: "rotate(-90deg)" },
    moreLink: "",
    moreName: "",
  },
  {
    name: "Ground",
    input: "ground",
    type: "mech",
    regex: /ground/,
    description: "The command should be executed while on the ground.",
    img: "",
    moreLink: "",
    moreName: "",
  },
  {
    name: "Air Throw",
    input: "air throw",
    type: "mech",
    regex: /airthrow/,
    description:
      "A throw that can be input in the air, and only works against airborne opponents. Check a guide for the game or character to see the throw inputs available.",
    img: "",
    moreLink: "https://glossary.infil.net/?t=Air%20Throw",
    moreName: "Glossary",
  },
  {
    name: "Throw",
    input: "throw",
    type: "mech",
    regex: /throw/,
    description:
      "A fast close-range move that cannot be blocked. Check a guide for the game to see the throw inputs available.",
    img: "",
    moreLink: "https://www.dustloop.com/w/GGACR/Mechanics#Throws",
    moreName: "Dustloop",
  },
  {
    name: "High Jump Cancel",
    input: ["hjc", "sjc"],
    type: "mech",
    regex: /hjc\.|sjc\.|hjc|sjc/,
    description:
      "Any Downward Direction then any Upward Direction while on the ground",
    img: "",
    moreLink: "https://www.dustloop.com/w/GGACR/Mechanics#High_Jump",
    moreName: "Dustloop",
  },
  {
    name: "Jump Cancel",
    input: "jc.",
    type: "mech",
    regex: /jc\.|jc/,
    description: "Canceling a move with a jump.",
    img: "",
    moreLink: "https://glossary.infil.net/?t=Jump%20Cancel",
    moreName: "Glossary",
  },
  {
    name: "Crouch",
    input: "cr.",
    type: "mech",
    regex: /cr\./,
    img: "",
    description: "Player must be crouching.",
    moreLink: "https://www.dustloop.com/w/GGACR/A.B.A",
    moreName: "Dustloop",
  },
  {
    name: "Close",
    input: "c.",
    type: "mech",
    regex: /c\./,
    img: "",
    description: "Player must be close to the target.",
    moreLink: "",
    moreName: "",
  },
  {
    name: "Standing Far",
    input: "st.",
    type: "mech",
    regex: /st\./,
    description: "Player must be standing and far from target.",
    img: "",
    moreLink: "",
    moreName: "",
  },
  {
    name: "Far",
    input: "f.",
    type: "mech",
    regex: /f\./,
    description: "Player must be far from the target.",
    img: "",
    moreLink: "",
    moreName: "",
  },
  {
    name: "Super Jump",
    input: ["hj.", "sj."],
    type: "mech",
    regex: /hj\.|sj\.|sj/,
    description:
      "Any Downward Direction > Any Upward Direction while on the ground",
    img: "",
    moreLink: "https://www.dustloop.com/w/GGACR/Mechanics#High_Jump",
    moreName: "Dustloop",
  },
  {
    name: "Jump",
    input: "j.",
    type: "mech",
    regex: /j\.|jump/,
    description: "",
    img: "",
    moreLink: "",
    moreName: "",
  },
  {
    name: "Air Dash Cancel",
    input: "adc",
    type: "mech",
    regex: /adc/,
    description: "",
    img: "",
    moreLink: "",
    moreName: "",
  },
  {
    name: "Dash Cancel",
    input: "dc",
    type: "mech",
    regex: /dc/,
    description: "",
    img: "",
    moreLink: "",
    moreName: "",
  },
  {
    name: "Counter Hit",
    input: "ch",
    type: "mech",
    regex: /ch/,
    description: "Hitting someone while they are in the startup of an attack. ",
    img: "",
    moreLink: "https://glossary.infil.net/?t=Counter%20Hit",
    moreName: "Glossary",
  },
  {
    name: "Anti Air",
    input: ["anti-air", "anti air", "aa"],
    type: "mech",
    regex: /aa|anti-air|antiair/,
    description:
      "Hitting someone who is jumping at you while you are on the ground.",
    img: "",
    moreLink: "https://glossary.infil.net/?t=Anti-Air",
    moreName: "Glossary",
  },
  {
    name: "Instant Air Dash",
    input: "iad",
    type: "mech-icon",
    regex: /iad/,
    description: "",
    img: <IstantAirDash />,
    moreLink: "https://www.dustloop.com/w/GGACR/Movement#Air_Movement",
    moreName: "Dustloop",
  },
];
