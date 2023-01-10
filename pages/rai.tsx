import { Image } from "@chakra-ui/react";
import { Header } from "../components/Header/Header";
import { Sidebar } from "../components/SideBar/Sidebar";
import styles from "../styles/Rai.module.css";
import CodeMirror from "@uiw/react-codemirror";
import { javascript } from "@codemirror/lang-javascript";
import { dracula } from "@uiw/codemirror-theme-dracula";
import {
  DoubleCircularIndicator,
  CircularIndicator,
  CircularDotIndicator,
  QuarterCircularIndicator,
  BoxIndicator,
  LinearIndicator,
  RippleIndicator,
} from "@crispengari/react-activity-indicators";
import Footer from "../components/Footer/Footer";
import NavBar from "../components/NavBar/NavBar";
const extensions = [javascript({ jsx: true })];

const Rai = () => {
  return (
    <div className={styles.rai}>
      <Header /> <NavBar />
      <div className={styles.rai__main}>
        <Sidebar />
        <div className={styles.rai__main__main}>
          <h1>Using React Activity Indicators (RAI)</h1>
          <p>
            We are going to show by example how to make use of all the available{" "}
            <span>rai</span> components in a <span>react</span> component.
          </p>
          <Image src="/cover.png" alt="cover" />
          <h2>1. CircularIndicator</h2>
          <p>
            Here is how you can use <span>CircularIndicators</span> in a{" "}
            <span>react</span> component.
          </p>
          <CodeMirror
            value={`
import React from 'react'
import {CircularIndicator} from '@crispengari/react-activity-indicators';
....
export default App:React.FC<{}> = ()=>{
  return (
    <div className="app">
      <CircularIndicator size="small" />
    </div>
  )
}
`}
            theme={dracula}
            extensions={extensions}
            editable={false}
          />
          <h2>Output</h2>
          <div className={styles.rai__main__main__canvas}>
            <CircularIndicator size="small" />
          </div>
          <h2>Props</h2>
          <p>
            <span>CircularIndicator</span> accept the following as its custom{" "}
            <span>props</span>. Note that some of its props inherit them from a{" "}
            <span>div</span> element for the outer <span>container</span>.
          </p>
          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>className</td>
                <td>String</td>
                <td>{""}</td>
              </tr>
              <tr>
                <td>size</td>
                <td>
                  <span>small</span>
                  <span>medium</span>
                  <span>large</span>
                </td>
                <td>
                  <span>{`small`}</span>
                </td>
              </tr>
              <tr>
                <td>color</td>
                <td>String</td>
                <td>
                  <span>{`"#2a6776"`}</span>
                </td>
              </tr>
            </tbody>
          </table>
          <h2>2. DoubleCircularIndicator</h2>
          <p>
            Here is how you can use <span>DoubleCircularIndicators</span> in a{" "}
            <span>react</span> component.
          </p>
          <CodeMirror
            value={`
import React from 'react'
import {DoubleCircularIndicator} from '@crispengari/react-activity-indicators';
....
export default App:React.FC<{}> = ()=>{
  return (
    <div className="app">
      <DoubleCircularIndicator size="small" />
    </div>
  )
}
`}
            theme={dracula}
            extensions={extensions}
            editable={false}
          />
          <h2>Output</h2>
          <div className={styles.rai__main__main__canvas}>
            <DoubleCircularIndicator size="small" />
          </div>
          <h2>Props</h2>
          <p>
            <span>DoubleCircularIndicator</span> accept the following as its
            custom <span>props</span>. Note that some of its props inherit them
            from a <span>div</span> element for the outer <span>container</span>
            .
          </p>
          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>className</td>
                <td>String</td>
                <td>{""}</td>
              </tr>
              <tr>
                <td>size</td>
                <td>
                  <span>small</span>
                  <span>medium</span>
                  <span>large</span>
                </td>
                <td>
                  <span>{`small`}</span>
                </td>
              </tr>
              <tr>
                <td>color</td>
                <td>String</td>
                <td>
                  <span>{`"#2a6776"`}</span>
                </td>
              </tr>
            </tbody>
          </table>

          <h2>3. CircularDotIndicator</h2>
          <p>
            Here is how you can use <span>CircularDotIndicators</span> in a{" "}
            <span>react</span> component.
          </p>
          <CodeMirror
            value={`
import React from 'react'
import {CircularDotIndicator} from '@crispengari/react-activity-indicators';
....
export default App:React.FC<{}> = ()=>{
  return (
    <div className="app">
      <CircularDotIndicator size="small" />
    </div>
  )
}
`}
            theme={dracula}
            extensions={extensions}
            editable={false}
          />
          <h2>Output</h2>
          <div className={styles.rai__main__main__canvas}>
            <CircularDotIndicator size="small" />
          </div>
          <h2>Props</h2>
          <p>
            <span>CircularDotIndicator</span> accept the following as its custom{" "}
            <span>props</span>. Note that some of its props inherit them from a{" "}
            <span>div</span> element for the outer <span>container</span>.
          </p>
          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>className</td>
                <td>String</td>
                <td>{""}</td>
              </tr>
              <tr>
                <td>size</td>
                <td>
                  <span>small</span>
                  <span>medium</span>
                  <span>large</span>
                </td>
                <td>
                  <span>{`small`}</span>
                </td>
              </tr>
              <tr>
                <td>color</td>
                <td>String</td>
                <td>
                  <span>{`"#2a6776"`}</span>
                </td>
              </tr>
            </tbody>
          </table>

          <h2>4. QuarterCircularIndicator</h2>
          <p>
            Here is how you can use <span>QuarterCircularIndicators</span> in a{" "}
            <span>react</span> component.
          </p>
          <CodeMirror
            value={`
import React from 'react'
import {QuarterCircularIndicator} from '@crispengari/react-activity-indicators';
....
export default App:React.FC<{}> = ()=>{
  return (
    <div className="app">
      <QuarterCircularIndicator size="small" />
    </div>
  )
}
`}
            theme={dracula}
            extensions={extensions}
            editable={false}
          />
          <h2>Output</h2>
          <div className={styles.rai__main__main__canvas}>
            <QuarterCircularIndicator size="small" />
          </div>
          <h2>Props</h2>
          <p>
            <span>QuarterCircularIndicator</span> accept the following as its
            custom <span>props</span>. Note that some of its props inherit them
            from a <span>div</span> element for the outer <span>container</span>
            .
          </p>
          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>className</td>
                <td>String</td>
                <td>{""}</td>
              </tr>
              <tr>
                <td>size</td>
                <td>
                  <span>small</span>
                  <span>medium</span>
                  <span>large</span>
                </td>
                <td>
                  <span>{`small`}</span>
                </td>
              </tr>
              <tr>
                <td>color</td>
                <td>String</td>
                <td>
                  <span>{`"#2a6776"`}</span>
                </td>
              </tr>
            </tbody>
          </table>

          <h2>5. RippleIndicator</h2>
          <p>
            Here is how you can use <span>RippleIndicators</span> in a{" "}
            <span>react</span> component.
          </p>
          <CodeMirror
            value={`
import React from 'react'
import {RippleIndicator} from '@crispengari/react-activity-indicators';
....
export default App:React.FC<{}> = ()=>{
  return (
    <div className="app">
      <RippleIndicator size="small" />
    </div>
  )
}
`}
            theme={dracula}
            extensions={extensions}
            editable={false}
          />
          <h2>Output</h2>
          <div className={styles.rai__main__main__canvas}>
            <RippleIndicator size="small" />
          </div>
          <h2>Props</h2>
          <p>
            <span>RippleIndicator</span> accept the following as its custom{" "}
            <span>props</span>. Note that some of its props inherit them from a{" "}
            <span>div</span> element for the outer <span>container</span>.
          </p>
          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>className</td>
                <td>String</td>
                <td>{""}</td>
              </tr>
              <tr>
                <td>size</td>
                <td>
                  <span>small</span>
                  <span>medium</span>
                  <span>large</span>
                </td>
                <td>
                  <span>{`small`}</span>
                </td>
              </tr>
              <tr>
                <td>color</td>
                <td>String</td>
                <td>
                  <span>{`"#2a6776"`}</span>
                </td>
              </tr>
            </tbody>
          </table>

          <h2>6. BoxIndicator</h2>
          <p>
            Here is how you can use <span>BoxIndicators</span> in a{" "}
            <span>react</span> component.
          </p>
          <CodeMirror
            value={`
import React from 'react'
import {BoxIndicator} from '@crispengari/react-activity-indicators';
....
export default App:React.FC<{}> = ()=>{
  return (
    <div className="app">
      <BoxIndicator size="small" />
    </div>
  )
}
`}
            theme={dracula}
            extensions={extensions}
            editable={false}
          />
          <h2>Output</h2>
          <div className={styles.rai__main__main__canvas}>
            <BoxIndicator size="small" />
          </div>
          <h2>Props</h2>
          <p>
            <span>BoxIndicator</span> accept the following as its custom{" "}
            <span>props</span>. Note that some of its props inherit them from a{" "}
            <span>div</span> element for the outer <span>container</span>.
          </p>
          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>className</td>
                <td>String</td>
                <td>{""}</td>
              </tr>
              <tr>
                <td>size</td>
                <td>
                  <span>small</span>
                  <span>medium</span>
                  <span>large</span>
                </td>
                <td>
                  <span>{`small`}</span>
                </td>
              </tr>
              <tr>
                <td>color</td>
                <td>String</td>
                <td>
                  <span>{`"#2a6776"`}</span>
                </td>
              </tr>
              <tr>
                <td>showProgress</td>
                <td>Boolean</td>
                <td>
                  <span>true</span>
                </td>
              </tr>
              <tr>
                <td>progress</td>
                <td>Number</td>
                <td>
                  <span>0</span>
                </td>
              </tr>
            </tbody>
          </table>

          <h2>7. LinearIndicator</h2>
          <p>
            Here is how you can use <span>LinearIndicators</span> in a{" "}
            <span>react</span> component.
          </p>
          <CodeMirror
            value={`
import React from 'react'
import {LinearIndicator} from '@crispengari/react-activity-indicators';
....
export default App:React.FC<{}> = ()=>{
  return (
    <div className="app">
      <LinearIndicator indeterminate />
    </div>
  )
}
`}
            theme={dracula}
            extensions={extensions}
            editable={false}
          />
          <h2>Output</h2>
          <div className={styles.rai__main__main__canvas}>
            <LinearIndicator indeterminate />
          </div>
          <h2>Props</h2>
          <p>
            <span>LinearIndicator</span> accept the following as its custom{" "}
            <span>props</span>. Note that some of its props inherit them from a{" "}
            <span>div</span> element for the outer <span>container</span>.
          </p>
          <table>
            <thead>
              <tr>
                <th>Prop</th>
                <th>Type</th>
                <th>Default</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>className</td>
                <td>String</td>
                <td>{""}</td>
              </tr>
              <tr>
                <td>indeterminate</td>
                <td>Boolean</td>
                <td>
                  <span>{`true`}</span>
                </td>
              </tr>
              <tr>
                <td>color</td>
                <td>String</td>
                <td>
                  <span>{`"#2a6776"`}</span>
                </td>
              </tr>
              <tr>
                <td>showProgress</td>
                <td>Boolean</td>
                <td>
                  <span>true</span>
                </td>
              </tr>
              <tr>
                <td>progress</td>
                <td>Number</td>
                <td>
                  <span>0</span>
                </td>
              </tr>
            </tbody>
          </table>

          <div className={styles.rai__main__main__nav}></div>
        </div>
      </div>
      <Footer />
    </div>
  );
};
export default Rai;
