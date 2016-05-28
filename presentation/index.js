// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Code,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from 'spectacle-code-slide';

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  city: require("../assets/city.jpg"),
  atomic_war: require("../assets/atomic_war.jpg"),
  eventLoopAngular: require("../assets/eventLoopAndroid.png"),
  monkey: require("../assets/monkey.gif"),
  noidea: require("../assets/noidea.jpg"),
  kat: require("../assets/kat.png"),
  rip: require("../assets/rip.jpg"),
  logo: require("../assets/formidable-logo.svg"),
  markdown: require("../assets/markdown.png"),
  proxies: require("../assets/proxies.png"),
  dart: require("../assets/dart.png"),
  facebook2004: require("../assets/facebook2004.png"),
  facebook2016: require("../assets/facebook2016.jpg"),
  angularReact: require("../assets/angularReact.jpg"),
  epicMage: require("../assets/wizard-epic.jpg"),
  lameMage: require("../assets/wizards-lame.jpg"),
  scu: require("../assets/should-component-update.png"),
  angular2Tree: require("../assets/angularTree.png"),
  tree1: require("../assets/tree1.png"),
  tree2: require("../assets/tree2.png"),
  tree3: require("../assets/tree3.png"),
  tree4: require("../assets/tree4.png"),
  treeImmutableAngular: require("../assets/treeImmutableAngular.png"),
  faster: require("../assets/faster.gif"),
  rxNg0: require("../assets/rxNg0.png"),
  rxNg1: require("../assets/rxNg1.png"),
  rxNg2: require("../assets/rxNg2.png"),
  universal: require("../assets/universal.png"),
  stealing: require("../assets/stealing.gif"),
  control: require("../assets/control.gif"),
  slow: require("../assets/slow.gif"),
  love: require("../assets/love.gif"),
  poor_wizard: require("../assets/poor_wizard.jpg"),
  epic_engineer: require("../assets/epic_engineer.jpg"),
  harry: require("../assets/ha.jpg"),
  uncontrollable: require("../assets/uncontrollable.png"),
  srlogo: require("../assets/srlogo.png"),
};

const code = {
  jquery: require("raw!../assets/src/jquery.js.example"),
  angular1: require("raw!../assets/src/angular1.js.example"),
  angular1apply: require("raw!../assets/src/angular1-apply.js.example"),
  zone: require("raw!../assets/src/zone.js.example"),
  zoneImpl: require("raw!../assets/src/zone.js.impl.example"),
  reactImpl: require("raw!../assets/src/react.js.example"),
  reconcilation: require("raw!../assets/src/reconcilation.js.example"),
  monomorphism: require("raw!../assets/src/monomorphism.js.example"),
  monomorphism1: require("raw!../assets/src/monomorphism1.js.example"),
  monomorphism2: require("raw!../assets/src/monomorphism2.js.example"),
  immutableAngular: require("raw!../assets/src/immutable.angular.js.example"),
  pureRenderMixin: require("raw!../assets/src/pureRenderMixin.js.example"),
  rxNg: require("raw!../assets/src/reactiveAngular.js.example"),
  mutable: require("raw!../assets/src/mutable.js.example"),

};


preloader(images);

const theme = createTheme({
  primary: "#00AE41"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500}>
          <Slide transition={["zoom"]} bgColor="primary">
            <Heading size={1} fit caps lineHeight={1} textColor="#1B1919">
              Change Detection
            </Heading>
            <Heading size={1} fit caps>
              Anno Domini 2016
            </Heading>
            <Text textSize="1.5em" margin="20px 0px 0px" bold>@ArturSkowronski</Text>
          </Slide>

          <Slide transition={["slide"]}>
            <Heading size={1} fit caps lineHeight={1} textColor="#1B1919">
              Angular magic
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="#1B1919">
              React magic
            </Heading>
            <Heading size={1} fit caps lineHeight={1} textColor="#1B1919">
              Ember magic
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgImage={images.epicMage.replace("/", "")} >
          </Slide>
          <Slide transition={["slide"]} bgImage={images.lameMage.replace("/", "")} >
          </Slide>
          <Slide transition={["slide"]} bgColor="#1B1919">
            <BlockQuote>
              <Quote>Any sufficiently advanced technology is indistinguishable from magic.</Quote>
              <Cite>Arthur C. Clarke</Cite>
            </BlockQuote>
          </Slide>
          <Slide transition={["zoom"]} bgColor="#1B1919" >
            <Image src={images.noidea.replace("/", "")} />
          </Slide>
          <Slide transition={["slide"]} notes="You can even put notes on your slide. How awesome is that?">
            <Appear fid="0">
              <Heading size={2} caps fit textFont="primary">
                It is all about state...
              </Heading>
            </Appear>
            <Appear fid="1">
              <Heading size={2} caps fit textFont="primary">
                ... how we manage it ...
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={2} caps fit textFont="primary">
                ... and how we render it
              </Heading>
            </Appear>
          </Slide>

          <Slide transition={["slide"]} bgColor="#1B1919" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Model -> DOM (Rendering or Projection)
            </Heading>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
               function(json) => DOM
            </Heading>
          </Slide>

          <Slide transition={["slide"]} notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textFont="primary">
               DOM changes are costly
            </Heading>
          </Slide>

          <Slide transition={["slide"]} bgColor="#1B1919" notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Once Upon a Time...
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgImage={images.facebook2004.replace("/", "")} >
            <Heading size={2} caps fit bgColor="#1B1919" textColor="primary" textFont="primary">
              Facebook 2004
            </Heading>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgDarken={0.45} bgImage={images.facebook2016.replace("/", "")} >
            <Heading size={2} caps fit bgColor="#1B1919" textColor="primary" textFont="primary">
              Facebook Today
            </Heading>
          </Slide>
          <Slide transition={["slide"]} notes="You can even put notes on your slide. How awesome is that?">
            <Heading size={2} caps fit textFont="primary">
              SPA
            </Heading>
          </Slide>
          <Slide transition={["slide"]} bgColor="#1B1919" notes="EmberJS">
              <Interactive />
          </Slide>
          <CodeSlide
            transition={[]}
            bgColor="#1B1919"
            lang="js"
            textSize="28"
            code={code.jquery}
            ranges={[
              { loc: [0, 4], title: "Vanilla HTML" },
              { loc: [5, 6], title: "JQuery Events"  },
              { loc: [6, 9], title: "Imperative as hell..."  }
            ]}/>
            <Slide transition={["slide"]} bgColor="primary" notes="Angular.js, Polymer, Object.observe (which is dead)">
              <Heading size={2} caps fit textColor="#1B1919" textFont="primary">
                 Two-way data-bindings
              </Heading>
              <Heading size={2} caps fit textColor="#1B1919" textFont="primary">
                Observers/Watchers
              </Heading>
            </Slide>
            <CodeSlide
              transition={[]}
              bgColor="#1B1919"
              lang="js"
              textSize="28"
              code={code.angular1}
              ranges={[
                { loc: [0, 4], title: "Angular Bindings" },
                { loc: [2, 3], title: "Use of variable"  },
                { loc: [5, 6], title: "Initial State"  },
                { loc: [0, 1], title: "Event Handler"  },
                { loc: [7, 10], title: "Mutator Function"  },
                { loc: [8, 9], title: "Change Value"  }
              ]}/>
              <Slide transition={["zoom", "fade"]} bgImage={images.harry.replace("/", "")} >
                <Heading size={2} caps fit bgColor="#1B1919" textColor="primary" textFont="primary">
                  Magic?
                </Heading>
              </Slide>
            <Slide transition={["slide"]} notes="Angular 2, Ember">
              <Heading size={2} caps fit textFont="primary">
                Digest Loop & Dirty Checking
              </Heading>
            </Slide>
            <CodeSlide
              transition={[]}
              bgColor="#1B1919"
              lang="js"
              textSize="28"
              code={code.angular1apply}
              ranges={[
                { loc: [0, 1], title: "Angular Bindings" },
                { loc: [2, 3], title: "Added to scope..."  },
                { loc: [4, 5], title: "...and to watchers list"  },
                { loc: [6, 9]},
                { loc: [10, 13], title: "Angular uses flow of events"  },
                { loc: [11, 12], title: "$apply kicks digest loop"  },
                { loc: [14, 18], title: "Events not controled by angular.js"  },
                { loc: [16, 17]},
                { loc: [19, 20], title: "Tree is not uniform :(" },

              ]}/>
           <Slide bgDarken={0.75}  transition={["slide"]}>
             <Heading size={2} caps fit textFont="primary">
               Object.observe()
             </Heading>
           </Slide>
           <Slide bgImage={images.rip.replace("/", "")} bgDarken={0.75} transition={["slide"]}>
             <Heading size={2} caps fit textColor="primary" textFont="primary">
               <strike>Object.observe()</strike>
             </Heading>
             <Heading size={1} textColor="primary" textFont="primary">
                01.2016
             </Heading>
           </Slide>

           <Slide transition={["slide"]} bgColor="#1B1919" notes="Angular 2, Ember">
              <Heading size={2} caps fit textColor="primary" textFont="primary">
                Proxies
              </Heading>
            </Slide>
            <Slide bgImage={images.proxies.replace("/", "")} transition={["slide"]} />

            <Slide transition={["slide"]} notes="Angular 2, Ember">
               <Heading size={2} caps fit textFont="primary">
                 Zones
               </Heading>
               <Image src={images.dart.replace("/", "")} margin="0px auto 40px" height="100px"/>
             </Slide>
             <Slide transition={["slide"]} bgColor="#1B1919" notes="Angular 2, Ember">
                <Heading size={2} caps fit textColor="primary" textFont="primary">
                  zone.js
                </Heading>
              </Slide>
              <CodeSlide
                transition={[]}
                bgColor="#1B1919"
                lang="js"
                textSize="28"
                code={code.zone}
                ranges={[
                  { loc: [0, 11]},
                  { loc: [7, 11], title: "Where Angular run methods" },
                  { loc: [1, 7], title: "AOP" },
                  { loc: [9, 10], title: "Non Native" },
                  { loc: [12, 21], title: "PseudoCode" },
                  { loc: [13, 14], title: "Overwrite local global state" },
                  { loc: [15, 19], title: "Delegate to original implementation" },
                  { loc: [22, 40], title: "Monkey Patching" }
                ]}/>
                <Slide>
                  <CodePane
                    lang="js"
                    source={code.zoneImpl}
                />
                </Slide>

            <Slide transition={["zoom", "fade"]} bgColor="#1B1919" bgImage={images.angularReact.replace("/", "")} >
              <Heading size={1} caps fit bgColor="#1B1919" textColor="primary" textFont="primary">
              Lead Angular Expert after announcement
              </Heading>
              <Heading size={1} caps fit bgColor="#1B1919" textColor="primary" textFont="primary">
              about moving the project to React.js
              </Heading>
              <Heading size={7} bgColor="#1B1919" textColor="primary" textFont="primary">
              Jan Matejko (1862)
              </Heading>
            </Slide>
            <Slide transition={["slide"]} bgColor="#1B1919" notes="EmberJS">
                <Interactive />
            </Slide>
            <CodeSlide
              transition={[]}
              bgColor="#1B1919"
              lang="js"
              textSize="28"
              code={code.reactImpl}
              ranges={[
                { loc: [0, 1], title: "React Component"},
                { loc: [3, 10], title: "Define initial state" },
                { loc: [21, 30], title: "Use this state in render function" },
                { loc: [18, 21]},
                { loc: [27, 28], title: "Handling events" },
                { loc: [11, 16], title: "Mutator function" },
                { loc: [19, 20] },
                { loc: [25, 26]}
              ]}/>
              <Slide transition={["slide"]} notes="You can even put notes on your slide. How awesome is that?">
                <Heading size={2} fit textFont="primary">
                   setState() -> generate whole new DOM
                </Heading>
              </Slide>
            <Slide transition={["slide"]} notes="You can even put notes on your slide. How awesome is that?">
              <Heading size={2} caps fit textFont="primary">
                 DOM changes are costly?
              </Heading>
            </Slide>
            <Slide transition={["slide"]} bgColor="#1B1919" notes="Angular 2, Ember">
              <Heading size={2} caps fit textColor="primary" textFont="primary">
                VirtualDOM
              </Heading>
            </Slide>
            <Slide transition={["slide"]} bgColor="#1B1919" notes="Angular 2, Ember">
              <Image src={images.tree1.replace("/", "")} margin="0px auto 40px" height="493px"/>
            </Slide>
            <Slide transition={["slide"]} bgColor="#1B1919" notes="Angular 2, Ember">
              <Image src={images.tree2.replace("/", "")} margin="0px auto 40px" height="493px"/>
            </Slide>
            <Slide transition={["slide"]} bgColor="#1B1919" notes="Angular 2, Ember">
              <Image src={images.tree3.replace("/", "")} margin="0px auto 40px" height="493px"/>
            </Slide>
            <Slide transition={["slide"]} bgColor="#1B1919" notes="Angular 2, Ember">
              <Heading size={2} caps fit textColor="primary" textFont="primary">
                Reconcilation (Diff)
              </Heading>
            </Slide>
            <Slide transition={["slide"]} bgColor="#1B1919" notes="Angular 2, Ember">
              <Heading size={2}  fit textColor="primary" textFont="primary">
                O(N<pow>3</ pow>)
              </Heading>
              <Heading size={2}  fit textColor="primary" textFont="primary">
                1000 x 1000 x 1000
              </Heading>
            </Slide>
            <Slide transition={["slide"]} bgColor="#1B1919" notes="Angular 2, Ember">
              <Heading size={2} caps fit textColor="primary" textFont="primary">
                Heuristic
              </Heading>
            </Slide>
            <CodeSlide
              transition={[]}
              bgColor="#1B1919"
              lang="js"
              textSize="28"
              code={code.reconcilation}
              ranges={[
                { loc: [0, 2], title: "Different elements..."},
                { loc: [3, 4], title: "...change everything" },
                { loc: [5, 7], title: "Same elements..."},
                { loc: [8,9], title: "...reconcile everything" },

              ]}/>
              <Slide bgImage={images.control.replace("/", "")}  transition={["slide"]}>
              <Heading size={2} fit bgColor="#1B1919" textColor="primary" textFont="primary">
                shouldComponentUpdate()
              </Heading>
              <Appear>
                <Heading size={2} caps fit bgColor="#1B1919" textColor="primary" textFont="primary">
                  Lightweight as possible
                </Heading>
              </Appear>
            </Slide>
            <Slide transition={["zoom", "fade"]} bgImage={images.stealing.replace("/", "")} >
              <Heading size={2} bgColor="#1B1919" textColor="primary" caps fit textFont="primary">
                Angular 2 also has component tree
              </Heading>
            </Slide>
            <Slide transition={["slide"]} bgColor="#1B1919" notes="Angular 2, Ember">
              <Image src={images.tree1.replace("/", "")} margin="0px auto 40px" height="493px"/>
            </Slide>
            <Slide transition={["slide"]} bgColor="#1B1919" notes="Angular 2, Ember">
              <Image src={images.tree4.replace("/", "")} margin="0px auto 40px" height="493px"/>
            </Slide>


              <Slide transition={["zoom", "fade"]} bgImage={images.love.replace("/", "")} >
                <Heading size={2} caps fit bgColor="#1B1919" textColor="primary" textFont="primary">
                  Developers + Abstraction = Love
                </Heading>
              </Slide>

              <CodeSlide
                transition={[]}
                bgColor="#1B1919"
                lang="js"
                textSize="28"
                code={code.monomorphism1}
                ranges={[
                  { loc: [0, 16], title: "First Approach"},
                  { loc: [1, 2], title: "Generic getter"},
                  { loc: [9, 11], title: "Generic Reconcilation"},
                  { loc: [0, 1], title: "Over and over"},

                ]}/>

                <Slide transition={["zoom", "fade"]} bgImage={images.slow.replace("/", "")} >
                  <Heading size={2} caps fit bgColor="#1B1919" textColor="primary" textFont="primary">
                    VM + Abstraction = ...
                  </Heading>
                </Slide>
                <Slide transition={["slide"]} bgColor="#1B1919" notes="Monomorphic">
                  <Heading size={2} caps fit textColor="primary" textFont="primary">
                    Monomorphism
                  </Heading>
                </Slide>

                <CodeSlide
                  transition={[]}
                  bgColor="#1B1919"
                  lang="js"
                  textSize="28"
                  code={code.monomorphism}
                  ranges={[
                    { loc: [0, 4], title: "What can be used there?"},
                    { loc: [6, 8], title: "Duck Typing" },
                    { loc: [9, 11], title: "Polimorphical Structure" },
                  ]}/>

                <Slide transition={["slide"]} notes="Monomorphic">
                  <Heading size={2} caps fit textFont="primary">
                    Code generation for rescue
                  </Heading>
                </Slide>
              <CodeSlide
                transition={[]}
                bgColor="#1B1919"
                lang="js"
                textSize="28"
                code={code.monomorphism2}
                ranges={[
                  { loc: [0, 1], title: "For every component..."},
                  { loc: [2, 12], title: "...generate change detection function..." },
                  { loc: [6, 10], title: "...just on this specific object" }
                ]}/>
                <Slide transition={["zoom", "fade"]} bgImage={images.faster.replace("/", "")} >
                  <Heading size={2} caps fit  bgColor="#1B1919"  textColor="primary" textFont="primary">
                    3-10x Faster
                  </Heading>
                </Slide>
            <Slide transition={["slide"]} bgColor="#1B1919" notes="Angular 2, Ember">
              <Heading size={2} caps fit textColor="primary" textFont="primary">
                Immutability
              </Heading>
              <Heading size={2} caps fit textColor="primary" textFont="primary">
               newValue == oldValue? :(
              </Heading>
            </Slide>

            <CodeSlide
              transition={[]}
              bgColor="#1B1919"
              lang="js"
              textSize="24"
              code={code.mutable}
              ranges={[
                { loc: [0, 4], title: "Vanilla JS"},
                { loc: [1, 3] },
                { loc: [3, 4], title: "We Need to check Properties"},
                { loc: [5, 9], title: "Immutable JS"},
                { loc: [6, 8]},
                { loc: [8, 9], title: "New Object"},

              ]}/>

            <Slide transition={["slide"]} notes="Angular 2, Ember">
              <Heading size={2} caps fit textFont="primary">
                Tooling
              </Heading>
              <Heading size={2} caps fit textFont="primary">
                Object.assign, Immutable.js
              </Heading>
            </Slide>

            <CodeSlide
              transition={[]}
              bgColor="#1B1919"
              lang="js"
              textSize="24"
              code={code.immutableAngular}
              ranges={[
                { loc: [0, 20], title: "Angular Metadata"}
              ]}/>

              <Slide transition={["slide"]} bgColor="#1B1919" notes="Angular 2, Ember">
                <Image src={images.treeImmutableAngular.replace("/", "")} margin="0px auto 40px" height="493px"/>
              </Slide>

            <Slide transition={["zoom", "fade"]} >
              <Heading size={2} fit textFont="primary">
                PureRenderMixin
              </Heading>
            </Slide>

            <CodeSlide
              transition={[]}
              bgColor="#1B1919"
              lang="js"
              textSize="22"
              code={code.pureRenderMixin}
              ranges={[
                { loc: [0, 1], title: "Import Mixin" },
                { loc: [4, 5], title: "Use Should Component Update" }
              ]}/>
              <Slide transition={["slide"]} notes="Angular 2, Ember">
                <Heading size={2} caps fit  textFont="primary">
                  Last But not least... RX
                </Heading>
              </Slide>
              <CodeSlide
                transition={[]}
                bgColor="#1B1919"
                lang="js"
                textSize="28"
                code={code.rxNg}
                ranges={[
                  { loc: [0, 7], title: "Define Observables"}
                ]}/>
              <Slide transition={["slide"]} bgColor="#1B1919" notes="Angular 2, Ember">
                <Image src={images.rxNg0.replace("/", "")} margin="0px auto 40px" height="493px"/>
              </Slide>
              <Slide transition={["slide"]} bgColor="#1B1919" notes="Angular 2, Ember">
                <Image src={images.rxNg1.replace("/", "")} margin="0px auto 40px" height="493px"/>
              </Slide>
              <Slide transition={["slide"]} bgColor="#1B1919" notes="Angular 2, Ember">
                <Image src={images.rxNg2.replace("/", "")} margin="0px auto 40px" height="493px"/>
              </Slide>
              <Slide transition={["slide"]} bgColor="#1B1919" notes="Monomorphic">
                <Heading size={2} caps fit textColor="primary" textFont="primary">
                  Wrapping Up
                </Heading>
              </Slide>
              <Slide transition={["slide"]} bgImage={images.poor_wizard.replace("/", "")} >
              </Slide>
              <Slide transition={["slide"]} bgImage={images.uncontrollable.replace("/", "")} >
              </Slide>
              <Slide transition={["slide"]} bgImage={images.epic_engineer.replace("/", "")} >
              </Slide>
          <Slide transition={["slide"]} bgColor="#1B1919" notes="Angular 2, Ember">
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              Thank You
            </Heading>
            <Heading size={2} caps fit textColor="primary" textFont="primary">
              and waiting for questions
            </Heading>
            <Image src={images.srlogo.replace("/", "")} fit margin="20px auto 40px" height="193px"/>

          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
