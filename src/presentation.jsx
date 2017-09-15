// Import React
import React from "react";
import * as mobx from "mobx";
import * as mobxReact from "mobx-react";
import * as redux from "redux";
import * as reduxReact from "react-redux";
import { Example } from "./Example";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Code,
  CodePane,
  Fill,
  Fit,
  Link,
  Layout,
  ComponentPlayground,
  Deck,
  Heading,
  Image,
  ListItem,
  List,
  Markdown,
  Notes,
  Quote,
  S,
  Slide,
  Text
} from "spectacle";
import CodeSlide from "./codeslide";
import ImageSlide from "spectacle-image-slide";

// Import theme
import createTheme from "spectacle/lib/themes/default";

import PlainJS from "./examples/plainJS"

import { BlogPost as BlogPostReact3 } from "./examples/react3.js"
import { App as BlogPostRedux } from "./examples/redux1.js"
import { App as BlogPostMobx1 } from "./examples/mobx1.js"

/* eslint import/no-webpack-loader-syntax: 0 */
const plainJSsource = require("!raw-loader!./examples/plainJSinit.js")
// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const theme = createTheme({
  primary: "white",
  secondary: "black",//"#1F2022",
  tertiary: "black",//"#03A9FC",
  quartenary: "#CECECE"
},
  // {
  //   primary: "Helvetica",
  //   // primary: { name: "Droid Sans", googleFont: true },
  //   secondary: "Helvetica"
  // }
);

const defaultTheme = createTheme({})

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transitionDuration={500} theme={defaultTheme}>
        <Slide>
          <Heading fit>
            React, Redux, MobX
          </Heading>

          <Cite textAlign="right" margin="300px 0 0 0">
            Łukasz Wiśniewski
          </Cite>
          <Notes>

          </Notes>
        </Slide>

        {/* PART 1: Intro */}
        <Slide>
          <Text>
            Example: a simple counter
          </Text>
          <PlainJS />
          <Notes>
            <p>
              Example: a counter
            </p>
            <p>
              Because they are used in so many places,
              and are especially useful for selling complex ideas,
              by making them look simple and easy.
            </p>
          </Notes>
        </Slide>
        <Slide>
          <Image height={400} src={require("./visitors.jpg")}>
          </Image>
          <Notes>
            Actually, there was a time when every self-respecting website
            had to have a counter. But the counting was done on the server side,
            so that doesn't count.
          </Notes>
        </Slide>
        <Slide>
          <Text>
            Example: a simple counter
          </Text>
          <PlainJS />
          <Notes>
            <p>
              Example: a counter
            </p>
            <p>
              Because they are used in so many places,
              and are especially useful for selling complex ideas,
              by making them look simple and easy.
            </p>
          </Notes>
        </Slide>
        <CodeSlide code={plainJSsource} lang="js" ranges={[
          { loc: [0, 14], title: "Plain JS counter" },
          { loc: [1, 3], note: "create the HTML elements" },
          { loc: [4, 5], note: "set initial state" },
          { loc: [6, 10], note: "handle state updates" },
          { loc: [11, 13], note: '"render"' },
        ]} notes={"Back to the counter"}>
        </CodeSlide>
        <Slide>
          <Text>
            Are we doing state management yet?
          </Text>
          <Notes>
            <p>It is using plain Javascript, with no React or state management library</p>
            <p>I would argue that we are managing state already</p>
            <p>DOM, in a sense, is the state</p>
            <p>The counter works, why would we want anything else?</p>
          </Notes>
        </Slide>
        <ImageSlide image={require("./power-bi-dashboard.png")} notes={
          "<p>Usually, we are building apps more complex than a simple counter.</p><p>Would it be easy to build such app just by manipulating the DOM?</p>"
        }>
        </ImageSlide>

        {/* PART 2: React */}

        <Slide>
          <Heading>
            React
          </Heading>
          <Notes>
            <p>We have already seen the basic benefits of using React when building web applications</p>
            <p>Let's take a closer look at how application state can managed in an app that uses React</p>
          </Notes>
        </Slide>
        <Slide>
          <Text>Plain JS</Text>
          <CodePane lang="js" textSize="1em" margin="0 0 50px 0">
            {
              'document.getElementsByTagName("img")[0].title\n' +
              '  = "Lorem ipsum"'
            }
          </CodePane>
          <Text>React</Text>
          <CodePane lang="js" textSize="1em">
            {
              'const sampleTitle = "Lorem ipsum";\n(...)\n' +
              '<img title={sampleTitle} />'
            }
          </CodePane>
          <Notes>
            <p>In contrast to direct DOM manipulation where the DOM actually holds the base state,</p>
            <p>in React, the state drives the DOM output</p>
          </Notes>
        </Slide>
        <Slide>
          {/*
graph LR
STATE --> REACT
REACT --> DOM
          */}
          <Image src={require('./state-react-dom.svg')}></Image>
          <Notes>
            <p>In other words - we pass state to a React component, and React takes care of rendering the DOM.</p>
          </Notes>
        </Slide>
        <Slide>
          {/*
graph LR
P2[PROPS] --> R2[REACT]
R2[REACT] --> D2[DOM]

graph LR
S1[STATE] --> R1[REACT]
P1[PROPS] --> R1[REACT]
R1[REACT] --> D1[DOM]
*/}
          <Text>
            Stateless components
          </Text>
          <Image src={require('./props-react-dom.svg')}></Image>
          <Notes>
            <p>Actually, it is a bit more complex than that</p>
            <p>The components in React can be either stateless, getting the state only from the outside,
              Through the so-called Props
            </p>
          </Notes>
        </Slide>
        <Slide>
          <Text>
            Stateful components
          </Text>
          <Image src={require('./state-props-react-dom.svg')}></Image>
          <Notes>
            <p>or they can be stateful, having internal state and also getting the state through Props</p>
          </Notes>
        </Slide>
        <CodeSlide code={require('!raw-loader!./examples/react1.js')} lang="js" ranges={[
          { loc: [0, 5], title: "Stateless component" },
        ]}>
          {/* <ComponentPlayground theme="light" code={require('!raw-loader!./examples/react1.js')} /> */}
        </CodeSlide>
        <Slide>
          <Text margin="50px">
            Output:
          </Text>
          {require('./examples/react1.js').BlogPost()}
        </Slide>
        <CodeSlide code={require('!raw-loader!./examples/react2.js')} lang="js" ranges={[
          { loc: [2, 17], title: "Children & parent" },
          { loc: [2, 9], note: "Child components" },
          { loc: [10, 17], note: "Parent" },
          { loc: [12, 14], note: "passing state down to children" },
        ]}>
        </CodeSlide>
        <Slide>
          <Text margin="50px">
            Output:
          </Text>
          {require('./examples/react2.js').BlogPost()}
          <Notes>
            The hierarchy could of course be higher, with the BlogPost
            being a child of a BlogPosts component, which would iterate on a collection of blog posts
            The BlogPosts could be in turn a child of a MainPanel component and so on
          </Notes>
        </Slide>
        <CodeSlide code={require('!raw-loader!./examples/react3.js')} lang="js" ranges={[
          { loc: [12, 13], title: "Stateful component" },
          { loc: [13, 17], note: "Sets it's initial state" },
          { loc: [18, 23], note: "Has a state modifying function" },
          { loc: [24, 35], note: "Both the state and the handler are passed..." },
          { loc: [6, 11], note: "... down to children" },
        ]}>
        </CodeSlide>
        <Slide>
          <Text margin="50px">
            Output:
          </Text>
          <BlogPostReact3 />
          <Notes>

          </Notes>
        </Slide>

        <CodeSlide code={require('!raw-loader!./examples/react3.js')} lang="js" ranges={[
          { loc: [19, 22], note: "Call setState to modify this.state" },
          { loc: [30, 31], note: "then use this.state when rendering" },
        ]} />
        <Slide>
          <Text>
            React App = Stateful components + Stateless components
          </Text>
          <Notes>
            A React application is basically a composition of stateful components, which
            hold the application state and pass it down, and stateless components, which
            only accept external state through props
          </Notes>
        </Slide>
        {/*
graph TD
BlogPosts --> |post| BlogPost
BlogPost .-> |onSelected| BlogPosts
BlogPost --> |text| Summary
BlogPost --> |text| Details
Details .-> |onClick| BlogPost

*/}
        <ImageSlide image={require('./react-hierachy.svg')} notes={
          "The general idea is that the state is flowing down from parent to child components," +
          "and the children notify parents abount events by calling event handlers"
        }></ImageSlide>
        <Slide>
          <Heading>
            State management in plain React
          </Heading>
          <List>
            <ListItem>simple to implement</ListItem>
            <ListItem>easy to trace and reason about</ListItem>
            <ListItem>(partially) easy to test</ListItem>
            <ListItem>no two-way binding</ListItem>
          </List>
          <Notes>
            <p>
              The data flow in React makes it easy to reason about state changes,
              to find out why there was a change
            </p>
            <p>
              The stateless components, the ones which take state as an external input
              and just render, are rather easy to test, just like pure functions in
              a functional programming paradigm.
            </p>
            <p>
              Notice that in contrast to for example AngularJS there is no two-way binding in React.
              This might seem limiting or cumbersome at first, but this provides easier traceability.
            </p>
          </Notes>
        </Slide>
        <Slide>
          <Heading>
            State management in plain React
          </Heading>
          <List>
            <ListItem><code>setState</code> is asynchronous</ListItem>
            <ListItem>state scattered through many components</ListItem>
            <ListItem>deep component hierarchies = lots of passing stuff up and down</ListItem>
          </List>
          <Notes>
            <p>
              setState might be cumbersome to use in more complex scenarios
              - you have to remember that it is async and that you should not derive the next state
              from `this.state`, but use the `setState((state, props) => newState)` version
            </p>
            <p>
              Though React state transitions are simple, scattering state around
              might make them harder to reason about. This should not be a problem
              if this state is of a "UI" kind, for example `isComboboxOpen`.
            </p>
            <p>
              Deep component hierarchies can mean that lots of components will be passing
              the state around without actually using it.
            </p>
          </Notes>
        </Slide>
        <Slide>
          <ComponentPlayground theme="light" code={require('!raw-loader!./examples/reactPlayground.js.example')} />
        </Slide>
        {/*
        graph TD
Main--> BlogPosts
BlogPosts .-> |onSelected| Main
Main -->|selected| SidePanel
SidePanel --> |related| RelatedPosts
BlogPosts --> |post| BlogPost
BlogPost .-> |onSelected| BlogPosts
BlogPost --> |text| Details
Details .-> |onClick| BlogPost

        */}
        <ImageSlide image={require('./react-deep-hierarchy.svg')}
          notes="Component in a side panel might want to use the same state as the one in the main panel"
        />
        <Slide>
          <Heading>
            When to use plain React?
          </Heading>
          <List>
            <ListItem>apps / widgets with a flat component structure</ListItem>
            <ListItem>reusable components</ListItem>
          </List>
          <Notes>
            <p>
              When the app structure is flat, the problem of excessive state passing does not surface.
            </p>
            <p>
              Also when creating a component that might be reused in multiple apps,
              not relying on additional 3rd party state management tools might be a safer choice.
            </p>
          </Notes>
        </Slide>

        {/* PART 3: Redux and MobX */}

        <Slide>
          <Heading>
            Redux and MobX
          </Heading>
          <Notes>
            <p>
              Foreword - there libraries are not React-specific, they can be used in other contexts,
              for example Angular, your DIY React-like library, you name it.
            </p>
            <p>
              The idea behind Redux or MobX is "view-agnostic".
            </p>
            <p>
              but they have ready-made React bindings, making it a breeze to use with React.
            </p>
          </Notes>
        </Slide>

        {/* PART 3.1: Redux */}
        <Slide>
          <Heading>
            Redux
          </Heading>
        </Slide>
        <Slide>
          <BlogPostRedux />
        </Slide>
        <CodeSlide code={require('!raw-loader!./examples/redux1.js')} lang="js" ranges={[
          { loc: [4, 13], note: "Child components still stateless" },
          { loc: [14, 23], note: "BlogPost stateless too" },
          { loc: [24, 27], note: "State ..." },
          { loc: [27, 32], note: "and callbacks ..." },
          { loc: [33, 37], note: "... will be provided by Redux" },
          { loc: [38, 54] },
          { loc: [55, 64] },
        ]} />
        <Slide>
          {/*
graph LR
components -->|dispatch| actions
actions --> reducers
subgraph store
   reducers
end
reducers -->|state| components
          */}
          <Heading>
            What's different?
          </Heading>
          <Appear>
            <Image src={require('./redux-flow.svg')}></Image>
          </Appear>
          <Notes>
          </Notes>
        </Slide>
        <Slide>
          <Image src={require('./redux-flow.svg')}></Image>
          <List>
            <ListItem>Fully unidirectional data flow</ListItem>
            <ListItem>Changes triggered by "actions"</ListItem>
            <ListItem>"Reducers" responsible for transforming state</ListItem>
            <ListItem>State is "global" and should be treated as immutable</ListItem>
          </List>
          <Notes>
          </Notes>
        </Slide>
        <Slide>
          <Heading>
            Benefits
          </Heading>
          <List>
            <ListItem>clear separation of concerns</ListItem>
            <ListItem>components and reducers easily testable</ListItem>
            <ListItem>extremely easy to track changes</ListItem>
            <ListItem>clear guideline to follow</ListItem>
          </List>
          <Notes>
            TODO: expand a bit on these points
          </Notes>
        </Slide>
        <Slide>
          <Heading>
            Drawbacks
          </Heading>
          <List>
            <ListItem>difficult to create self-contained components</ListItem>
            <ListItem>more code (to read through)</ListItem>
            <ListItem>no standard, elegant way to deal with side effects</ListItem>
          </List>
          <Notes>
            <p>
              If going full-Redux, the whole state is taken out of the components.
              They are views reacting to state changes, but with no behavior.
              The solution here is to not apply Redux religiously, everywhere, but where it makes sense.
            </p>
            <p>
              Though writing more code than when using some other library is not necessarily a bad thing,
              I would argue that reading through more code and jumping between multiple files might be a problem.
            </p>
            <p>
              There are many solutions to the problem of dealing with side effects in Redux, but each seems to have
              it's own problems. I think part of the problem is either in the language or React itself,
              because other environments (like Elm) have dealt with it more elegantly.
            </p>
          </Notes>
        </Slide>
        <Slide>
          <Heading>
            When to use Redux?
          </Heading>
          <List>
            <ListItem>bigger apps</ListItem>
            <ListItem>bigger, frequently changing teams</ListItem>
          </List>
          <Notes>
            Redux adds structure to a React app and it's clear guidelines can help
            maintain code quality in bigger teams with different levels of experience,
            and frequent newcomers. Tightly knit teams of seasoned developers might prefer other solutions.
          </Notes>
        </Slide>

        {/* PART 3.2: MobX */}
        <Slide>
          <Heading>
            MobX
          </Heading>
        </Slide>
        <Slide>
          <BlogPostMobx1 />
        </Slide>
        <CodeSlide code={require('!raw-loader!./examples/mobx1.js')} lang="js" ranges={[
          { loc: [4, 13], note: "Child components still stateless" },
          { loc: [14, 27], note: "BlogPost stateless too" },
          { loc: [30, 37], note: "State and callbacks in a simple class" },
          { loc: [40, 45], note: "passed to the component" },
        ]} />
        <CodeSlide code={require('!raw-loader!./examples/mobx2.js')} lang="js" ranges={[
          { loc: [16, 21], note: "MobX replaces this.state and setState" },
          { loc: [14, 32] }
        ]} />
        <Slide>
          <Heading>
            Core MobX functionality
          </Heading>
        </Slide>
        <Slide>
          <Text>
            When <code>value</code> changes, notify the subscribers
          </Text>
          <p>
            <Code>
              @observable value = 123
            </Code>
          </p>
          <p>
            <Code>
              const value = observable(123)
            </Code>
          </p>
        </Slide>
        <Slide>
          <Text>
            Subscribe to the observables and notify when the projection changes.
          </Text>         
          <CodePane lang="js" textSize="0.9em">
            {require('!raw-loader!./examples/mobxComputed.js.example')}
          </CodePane>
        </Slide>
        <Slide>
          <Text>
            Subscribe to the observables and *do* something
          </Text>         
          <CodePane lang="js" textSize="0.9em">
            {require('!raw-loader!./examples/mobxAutorun.js.example')}
          </CodePane>
        </Slide>
        <Slide>
          <Heading>
            Benefits
          </Heading>
          <List>
            <ListItem>normalized, minimal state</ListItem>
            <ListItem>autogenerated <code>shouldComponentUpdate</code> (React specific)</ListItem>
            <ListItem>possibly easier to understand when coming from OOP background</ListItem>
            <ListItem>side effects don't need additional tooling</ListItem>
            <ListItem>very easy to type check your code (Typescript specific)</ListItem>
          </List>
          <Notes>
            <p>
              Normalized minimal state means that there is less posibility for the app
              to be in an invalid state. Computed values project the state into more usable values.
            </p>
            <p>
              Thanks to the <code>shouldComponentUpdate</code> autogeneration, it is less likely
              you will hit performance problems related to too many component rerender / DOM reconciliations.
            </p>
          </Notes>
        </Slide>
        <Slide>
          <Heading>
            Drawbacks
          </Heading>
          <List>
            <ListItem>no clearly defined architecture / guidelines</ListItem>
            <ListItem>might seem magical when compared to plain React or Redux</ListItem>
            <ListItem>has its quirks / things you need to be aware</ListItem>
            <ListItem>difficult to model some things</ListItem>
          </List>
          <Notes>
            <p>
              MobX is a flexible library when compared to Redux, serving a bit different purpose.
              It is to Redux almost like React is to Angular - you get a base building block but still need
              to build upon it.
            </p>
            <p>
              At first look, it might be hard to understand why changing one thing results in some other things reaction.
            </p>
            <p>
              Code after async not observed. Autorun needs to be disposed.
            </p>
            <p>

            </p>
          </Notes>
        </Slide>
        <Slide>
          <Heading>
            When to use?
          </Heading>
          <List>
            <ListItem>projects of all sizes</ListItem>
            <ListItem>"pick and mix"</ListItem>
            <ListItem>Small, experienced teams looking for flexibility</ListItem>
          </List>
          <Notes>
            <p>
              Can be easily intergrated into a bigger solution to solve specific problems.
              For example MobX could serve as a replacement for plain React's setState, with
              the "external" state managed by Redux.
            </p>
            <p>
              Also integrates well with reactive streams libraries like RxJS.
              Where reactive streams represent a stream of events, MobX constructs are sort of a snapshot
              of the latest events.
            </p>
          </Notes>
        </Slide>

        {/* PART 3.3: Live coding */}
        <Slide>
          <Link href="https://codesandbox.io/embed/5k75mlom34?fontsize=25&hidenavigation=1">Code Sandbox</Link>
        </Slide>
        <Slide>
          <Example />
        </Slide>

        {/* PART 4: Closing words */}

        <Slide>
          <Heading>
            Redux vs Mobx vs (plain) React
          </Heading>
          <List>
            <ListItem>no silver bullets</ListItem>
            <ListItem>real life != counters & todo lists</ListItem>
          </List>
          <Notes>
            <p>
              What to choose? There is no clear winner.
              As always, try to use the best tool for the job.
            </p>
            <p>
              It is possible to mix all three and it is possible to implement
              a Redux-like approach using MobX. You can also get some of the benefits
              of Redux without Redux by separating the state setting functions from
              React components, into reducer-like functions.
            </p>
            <p>
              Start small, with plain React and "upgrade" when there is a need.
            </p>
          </Notes>
        </Slide>
        <Slide>
          <Heading>
            Go out of your comfort zone
          </Heading>
          <List>
            <ListItem>Typescript</ListItem>
            <ListItem>CycleJS</ListItem>
            <ListItem>CerebralJS</ListItem>
            <ListItem>ELM</ListItem>
          </List>
          <Notes>
            Learning ideas from different ecosystems can bring benefit even
            if you are not planning to leave the "safety" of React.
          </Notes>
        </Slide>
        <Slide>
          <Heading>
            Thank you!
          </Heading>
        </Slide>        
      </Deck>
    );
  }
}