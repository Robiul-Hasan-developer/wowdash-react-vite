// import LazyWrapper from "@/components/LazyWrapper";
// import DefaultCardComponent from "@/components/shared/DefaultCardComponent";
// import { Label } from "@/components/ui/label";
// import { Switch } from '@/components/ui/switch';
// import Breadcrumb from "@/layouts/Breadcrumb";
// import { useState } from "react";

// const SwitchPage = () => {
    
//   const [switch1, setSwitch1] = useState(true);
//   const [switch2, setSwitch2] = useState(true);
//   const [switch3, setSwitch3] = useState(true);
//   const [switch4, setSwitch4] = useState(true);
//   const [inactiveSwitch1, setinactiveSwitch1] = useState(false);
//   const [inactiveSwitch2, setinactiveSwitch2] = useState(false);
//   const [inactiveSwitch3, setinactiveSwitch3] = useState(false);
//   const [inactiveSwitch4, setinactiveSwitch4] = useState(false);

//   const [switchTwo1, setSwitchTwo1] = useState(true);
//   const [switchTwo2, setSwitchTwo2] = useState(true);
//   const [switchTwo3, setSwitchTwo3] = useState(true);
//   const [switchTwo4, setSwitchTwo4] = useState(true);
//   const [inactiveSwitchTwo1, setinactiveSwitchTwo1] = useState(false);
//   const [inactiveSwitchTwo2, setinactiveSwitchTwo2] = useState(false);
//   const [inactiveSwitchTwo3, setinactiveSwitchTwo3] = useState(false);
//   const [inactiveSwitchTwo4, setinactiveSwitchTwo4] = useState(false);

//   const [switchWithText1, setSwitchWithText1] = useState(false);
//   const [switchWithText2, setSwitchWithText2] = useState(false);
//   const [inactiveSwitchHorizonta1, setinactiveSwitchHorizonta1] = useState(false);
//   const [inactiveSwitchHorizonta2, setinactiveSwitchHorizonta2] = useState(false);
//   const [inactiveSwitchHorizonta3, setinactiveSwitchHorizonta3] = useState(false);
//   const [inactiveSwitchHorizonta4, setinactiveSwitchHorizonta4] = useState(false);
    
//     return (
//         <>
//             <Breadcrumb title="Switch" text="Switch" />

//             <LazyWrapper>
//                 <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

//                     <DefaultCardComponent title="Default Switch">
//                         <div className="flex items-center flex-wrap gap-8">
//                             <div className="flex items-center flex-wrap gap-6">
//                                 <div className="flex items-center space-x-2">
//                                     <Switch
//                                         id="switch1"
//                                         checked={switch1}
//                                         onCheckedChange={setSwitch1}
//                                         className="!bg-[#9ca3af] !data-[state=checked]:bg-primary"
//                                     />
//                                     <Label
//                                         htmlFor="switch1"
//                                         className={switch1 ? "text-primary font-medium" : ""}
//                                     >
//                                         Switch Active
//                                     </Label>
//                                 </div>
//                                 <div className="flex items-center space-x-2">
//                                     <Switch
//                                         id="switch2"
//                                         checked={switch2}
//                                         onCheckedChange={setSwitch2}
//                                         className="!bg-[#9ca3af] !data-[state=checked]:bg-purple-600"
//                                     />
//                                     <Label
//                                         htmlFor="switch2"
//                                         className={switch2 ? "text-purple-600 font-medium" : ""}
//                                     >
//                                         Switch Active
//                                     </Label>
//                                 </div>
//                                 <div className="flex items-center space-x-2">
//                                     <Switch
//                                         id="switch3"
//                                         checked={switch3}
//                                         onCheckedChange={setSwitch3}
//                                         className="!bg-[#9ca3af] !data-[state=checked]:bg-green-600"
//                                     />
//                                     <Label
//                                         htmlFor="switch3"
//                                         className={switch3 ? "text-green-600 font-medium" : ""}
//                                     >
//                                         Switch Active
//                                     </Label>
//                                 </div>
//                                 <div className="flex items-center space-x-2">
//                                     <Switch
//                                         id="switch4"
//                                         checked={switch4}
//                                         onCheckedChange={setSwitch4}
//                                         className="!bg-[#9ca3af] !data-[state=checked]:bg-yellow-500"
//                                     />
//                                     <Label
//                                         htmlFor="switch4"
//                                         className={switch4 ? "text-yellow-500 font-medium" : ""}
//                                     >
//                                         Switch Active
//                                     </Label>
//                                 </div>
//                             </div>

//                             <div className="flex items-center flex-wrap gap-6">
//                                 <div className="flex items-center space-x-2">
//                                     <Switch
//                                         id="inactiveSwitch1"
//                                         checked={inactiveSwitch1}
//                                         onCheckedChange={setinactiveSwitch1}
//                                         className="!bg-[#9ca3af] !data-[state=checked]:bg-primary"
//                                     />
//                                     <Label
//                                         htmlFor="inactiveSwitch1"
//                                         className={inactiveSwitch1 ? "text-primary font-medium" : ""}
//                                     >
//                                         Switch Inactive
//                                     </Label>
//                                 </div>
//                                 <div className="flex items-center space-x-2">
//                                     <Switch
//                                         id="inactiveSwitch2"
//                                         checked={inactiveSwitch2}
//                                         onCheckedChange={setinactiveSwitch2}
//                                         className="!bg-[#9ca3af] !data-[state=checked]:bg-purple-600"
//                                     />
//                                     <Label
//                                         htmlFor="inactiveSwitch2"
//                                         className={inactiveSwitch2 ? "text-purple-600 font-medium" : ""}
//                                     >
//                                         Switch Inactive
//                                     </Label>
//                                 </div>
//                                 <div className="flex items-center space-x-2">
//                                     <Switch
//                                         id="inactiveSwitch3"
//                                         checked={inactiveSwitch3}
//                                         onCheckedChange={setinactiveSwitch3}
//                                         className="!bg-[#9ca3af] !data-[state=checked]:bg-green-600"
//                                     />
//                                     <Label
//                                         htmlFor="inactiveSwitch3"
//                                         className={inactiveSwitch3 ? "text-green-600 font-medium" : ""}
//                                     >
//                                         Switch Inactive
//                                     </Label>
//                                 </div>
//                                 <div className="flex items-center space-x-2">
//                                     <Switch
//                                         id="inactiveSwitch4"
//                                         checked={inactiveSwitch4}
//                                         onCheckedChange={setinactiveSwitch4}
//                                         className="!bg-[#9ca3af] !data-[state=checked]:bg-yellow-500"
//                                     />
//                                     <Label
//                                         htmlFor="inactiveSwitch4"
//                                         className={inactiveSwitch4 ? "text-yellow-500 font-medium" : ""}
//                                     >
//                                         Switch Inactive
//                                     </Label>
//                                 </div>
//                             </div>
//                         </div>
//                     </DefaultCardComponent>

//                     <DefaultCardComponent title="Switch Disable">
//                         <div className="flex items-center flex-wrap gap-8">
//                             <div className="flex items-center flex-wrap gap-6">
//                                 <div className="flex items-center space-x-2">
//                                     <Switch
//                                         id="switchTwo1"
//                                         checked={switchTwo1}
//                                         onCheckedChange={setSwitchTwo1}
//                                         className="!bg-[#9ca3af] !data-[state=checked]:bg-primary"
//                                     />
//                                     <Label
//                                         htmlFor="switchTwo1"
//                                         className={switchTwo1 ? "text-primary font-medium" : ""}
//                                     >
//                                         Switch Active
//                                     </Label>
//                                 </div>
//                                 <div className="flex items-center space-x-2">
//                                     <Switch
//                                         id="switchTwo2"
//                                         checked={switchTwo2}
//                                         onCheckedChange={setSwitchTwo2}
//                                         className="!bg-[#9ca3af] !data-[state=checked]:bg-purple-600"
//                                     />
//                                     <Label
//                                         htmlFor="switchTwo2"
//                                         className={switchTwo2 ? "text-purple-600 font-medium" : ""}
//                                     >
//                                         Switch Active
//                                     </Label>
//                                 </div>
//                                 <div className="flex items-center space-x-2">
//                                     <Switch
//                                         id="switchTwo3"
//                                         checked={switchTwo3}
//                                         onCheckedChange={setSwitchTwo3}
//                                         className="!bg-[#9ca3af] !data-[state=checked]:bg-green-600"
//                                     />
//                                     <Label
//                                         htmlFor="switchTwo3"
//                                         className={switchTwo3 ? "text-green-600 font-medium" : ""}
//                                     >
//                                         Switch Active
//                                     </Label>
//                                 </div>
//                                 <div className="flex items-center space-x-2">
//                                     <Switch
//                                         id="switchTwo4"
//                                         checked={switchTwo4}
//                                         onCheckedChange={setSwitchTwo4}
//                                         className="!bg-[#9ca3af] !data-[state=checked]:bg-yellow-500"
//                                     />
//                                     <Label
//                                         htmlFor="switchTwo4"
//                                         className={switchTwo4 ? "text-yellow-500 font-medium" : ""}
//                                     >
//                                         Switch Active
//                                     </Label>
//                                 </div>
//                             </div>

//                             <div className="flex items-center flex-wrap gap-6">
//                                 <div className="flex items-center space-x-2">
//                                     <Switch
//                                         id="inactiveSwitchTwo1"
//                                         checked={inactiveSwitchTwo1}
//                                         onCheckedChange={setinactiveSwitchTwo1}
//                                         className="!bg-[#9ca3af] !data-[state=checked]:bg-primary"
//                                     />
//                                     <Label
//                                         htmlFor="inactiveSwitchTwo1"
//                                         className={inactiveSwitchTwo1 ? "text-primary font-medium" : ""}
//                                     >
//                                         Switch Inactive
//                                     </Label>
//                                 </div>
//                                 <div className="flex items-center space-x-2">
//                                     <Switch
//                                         id="inactiveSwitchTwo2"
//                                         checked={inactiveSwitchTwo2}
//                                         onCheckedChange={setinactiveSwitchTwo2}
//                                         className="!bg-[#9ca3af] !data-[state=checked]:bg-purple-600"
//                                     />
//                                     <Label
//                                         htmlFor="inactiveSwitchTwo2"
//                                         className={inactiveSwitchTwo2 ? "text-purple-600 font-medium" : ""}
//                                     >
//                                         Switch Inactive
//                                     </Label>
//                                 </div>
//                                 <div className="flex items-center space-x-2">
//                                     <Switch
//                                         id="inactiveSwitchTwo3"
//                                         checked={inactiveSwitchTwo3}
//                                         onCheckedChange={setinactiveSwitchTwo3}
//                                         className="!bg-[#9ca3af] !data-[state=checked]:bg-green-600"
//                                     />
//                                     <Label
//                                         htmlFor="inactiveSwitchTwo3"
//                                         className={inactiveSwitchTwo3 ? "text-green-600 font-medium" : ""}
//                                     >
//                                         Switch Inactive
//                                     </Label>
//                                 </div>
//                                 <div className="flex items-center space-x-2">
//                                     <Switch
//                                         id="inactiveSwitchTwo4"
//                                         checked={inactiveSwitchTwo4}
//                                         onCheckedChange={setinactiveSwitchTwo4}
//                                         className="!bg-[#9ca3af] !data-[state=checked]:bg-yellow-500"
//                                     />
//                                     <Label
//                                         htmlFor="inactiveSwitchTwo4"
//                                         className={inactiveSwitchTwo4 ? "text-yellow-500 font-medium" : ""}
//                                     >
//                                         Switch Inactive
//                                     </Label>
//                                 </div>
//                             </div>
//                         </div>
//                     </DefaultCardComponent>

//                     <DefaultCardComponent title="Switch With Tex">
//                         <div className="flex items-center flex-wrap gap-6">
//                             <div className="flex items-center space-x-2">
//                                 <Switch
//                                     id="switchWithText1"
//                                     checked={switchWithText1}
//                                     onCheckedChange={setSwitchWithText1}
//                                     className="!bg-[#9ca3af] !data-[state=checked]:bg-primary"
//                                 />
//                                 <Label
//                                     htmlFor="switchWithText1"
//                                     className={switchWithText1 ? "text-primary font-medium" : ""}
//                                 >
//                                     Yes
//                                 </Label>
//                             </div>
//                             <div className="flex items-center space-x-2">
//                                 <Switch
//                                     id="switchWithText2"
//                                     checked={switchWithText2}
//                                     onCheckedChange={setSwitchWithText2}
//                                     className="!bg-[#9ca3af] !data-[state=checked]:bg-primary"
//                                 />
//                                 <Label
//                                     htmlFor="switchWithText2"
//                                     className={switchWithText2 ? "text-primary font-medium" : ""}
//                                 >
//                                     No
//                                 </Label>
//                             </div>
//                         </div>
//                     </DefaultCardComponent>

//                     <DefaultCardComponent title="Switch Horizontal">
//                         <div className="flex items-center flex-wrap gap-6">
//                             <div className="flex items-center space-x-2">
//                                 <Switch
//                                     id="inactiveSwitchHorizonta1"
//                                     checked={inactiveSwitchHorizonta1}
//                                     onCheckedChange={setinactiveSwitchHorizonta1}
//                                     className="!bg-[#9ca3af] !data-[state=checked]:bg-primary"
//                                 />
//                                 <Label
//                                     htmlFor="inactiveSwitchHorizonta1"
//                                     className={inactiveSwitchHorizonta1 ? "text-primary font-medium" : ""}
//                                 >
//                                     Horizontal 1
//                                 </Label>
//                             </div>
//                             <div className="flex items-center space-x-2">
//                                 <Switch
//                                     id="inactiveSwitchHorizonta2"
//                                     checked={inactiveSwitchHorizonta2}
//                                     onCheckedChange={setinactiveSwitchHorizonta2}
//                                     className="!bg-[#9ca3af] !data-[state=checked]:bg-purple-600"
//                                 />
//                                 <Label
//                                     htmlFor="inactiveSwitchHorizonta2"
//                                     className={inactiveSwitchHorizonta2 ? "text-purple-600 font-medium" : ""}
//                                 >
//                                     Horizontal 2
//                                 </Label>
//                             </div>
//                             <div className="flex items-center space-x-2">
//                                 <Switch
//                                     id="inactiveSwitchHorizonta3"
//                                     checked={inactiveSwitchHorizonta3}
//                                     onCheckedChange={setinactiveSwitchHorizonta3}
//                                     className="!bg-[#9ca3af] !data-[state=checked]:bg-green-600"
//                                 />
//                                 <Label
//                                     htmlFor="inactiveSwitchHorizonta3"
//                                     className={inactiveSwitchHorizonta3 ? "text-green-600 font-medium" : ""}
//                                 >
//                                     Horizontal 3
//                                 </Label>
//                             </div>
//                             <div className="flex items-center space-x-2">
//                                 <Switch
//                                     id="inactiveSwitchHorizonta4"
//                                     checked={inactiveSwitchHorizonta4}
//                                     onCheckedChange={setinactiveSwitchHorizonta4}
//                                     className="!bg-[#9ca3af] !data-[state=checked]:bg-yellow-500"
//                                 />
//                                 <Label
//                                     htmlFor="inactiveSwitchHorizonta4"
//                                     className={inactiveSwitchHorizonta4 ? "text-yellow-500 font-medium" : ""}
//                                 >
//                                     Horizontal 4
//                                 </Label>
//                             </div>
//                         </div>
//                     </DefaultCardComponent>
//                 </div>
//             </LazyWrapper>

//         </>
//     );
// };

// export default SwitchPage;














"use client"

import LazyWrapper from "@/components/LazyWrapper"
import DefaultCardComponent from "@/components/shared/DefaultCardComponent"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import Breadcrumb from "@/layouts/Breadcrumb"
import React from "react"

/* ================= REDUCER ================= */

type State = {
  [key: string]: boolean
}

type Action = {
  type: "TOGGLE"
  key: string
}

const reducer = (state: State, action: Action): State => {
  switch (action.type) {
    case "TOGGLE":
      return {
        ...state,
        [action.key]: !state[action.key],
      }
    default:
      return state
  }
}

/* ================= INITIAL STATE ================= */

const initialState: State = {
  switch1: true,
  switch2: true,
  switch3: true,
  switch4: true,

  inactiveSwitch1: false,
  inactiveSwitch2: false,
  inactiveSwitch3: false,
  inactiveSwitch4: false,

  switchTwo1: true,
  switchTwo2: true,
  switchTwo3: true,
  switchTwo4: true,

  inactiveSwitchTwo1: false,
  inactiveSwitchTwo2: false,
  inactiveSwitchTwo3: false,
  inactiveSwitchTwo4: false,

  switchWithText1: false,
  switchWithText2: false,

  inactiveSwitchHorizonta1: false,
  inactiveSwitchHorizonta2: false,
  inactiveSwitchHorizonta3: false,
  inactiveSwitchHorizonta4: false,
}

/* ================= COMPONENT ================= */

const SwitchPage = () => {
  const [state, dispatch] = React.useReducer(reducer, initialState)

  const toggle = (key: string) =>
    dispatch({ type: "TOGGLE", key })

  return (
    <>
      <Breadcrumb title="Switch" text="Switch" />

      <LazyWrapper>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* ================= DEFAULT SWITCH ================= */}
          <DefaultCardComponent title="Default Switch">
            <div className="flex flex-wrap gap-8">

              <div className="flex flex-wrap gap-6">
                {[
                  ["switch1", "text-primary", "bg-primary"],
                  ["switch2", "text-purple-600", "bg-purple-600"],
                  ["switch3", "text-green-600", "bg-green-600"],
                  ["switch4", "text-yellow-500", "bg-yellow-500"],
                ].map(([key, textColor, bg]) => (
                  <div key={key} className="flex items-center space-x-2">
                    <Switch
                      id={key}
                      checked={state[key]}
                      onCheckedChange={() => toggle(key)}
                      className={`!bg-[#9ca3af] !data-[state=checked]:${bg}`}
                    />
                    <Label
                      htmlFor={key}
                      className={state[key] ? `${textColor} font-medium` : ""}
                    >
                      Switch Active
                    </Label>
                  </div>
                ))}
              </div>

              <div className="flex flex-wrap gap-6">
                {[
                  ["inactiveSwitch1", "text-primary", "bg-primary"],
                  ["inactiveSwitch2", "text-purple-600", "bg-purple-600"],
                  ["inactiveSwitch3", "text-green-600", "bg-green-600"],
                  ["inactiveSwitch4", "text-yellow-500", "bg-yellow-500"],
                ].map(([key, textColor, bg]) => (
                  <div key={key} className="flex items-center space-x-2">
                    <Switch
                      id={key}
                      checked={state[key]}
                      onCheckedChange={() => toggle(key)}
                      className={`!bg-[#9ca3af] !data-[state=checked]:${bg}`}
                    />
                    <Label
                      htmlFor={key}
                      className={state[key] ? `${textColor} font-medium` : ""}
                    >
                      Switch Inactive
                    </Label>
                  </div>
                ))}
              </div>

            </div>
          </DefaultCardComponent>

          {/* ================= SWITCH DISABLE ================= */}
          <DefaultCardComponent title="Switch Disable">
            <div className="flex flex-wrap gap-8">

              <div className="flex flex-wrap gap-6">
                {["switchTwo1", "switchTwo2", "switchTwo3", "switchTwo4"].map(
                  (key) => (
                    <div key={key} className="flex items-center space-x-2">
                      <Switch
                        id={key}
                        checked={state[key]}
                        onCheckedChange={() => toggle(key)}
                        className="!bg-[#9ca3af] !data-[state=checked]:bg-primary"
                      />
                      <Label
                        htmlFor={key}
                        className={state[key] ? "text-primary font-medium" : ""}
                      >
                        Switch Active
                      </Label>
                    </div>
                  )
                )}
              </div>

              <div className="flex flex-wrap gap-6">
                {[
                  "inactiveSwitchTwo1",
                  "inactiveSwitchTwo2",
                  "inactiveSwitchTwo3",
                  "inactiveSwitchTwo4",
                ].map((key) => (
                  <div key={key} className="flex items-center space-x-2">
                    <Switch
                      id={key}
                      checked={state[key]}
                      onCheckedChange={() => toggle(key)}
                      className="!bg-[#9ca3af] !data-[state=checked]:bg-primary"
                    />
                    <Label
                      htmlFor={key}
                      className={state[key] ? "text-primary font-medium" : ""}
                    >
                      Switch Inactive
                    </Label>
                  </div>
                ))}
              </div>

            </div>
          </DefaultCardComponent>

          {/* ================= SWITCH WITH TEXT ================= */}
          <DefaultCardComponent title="Switch With Text">
            <div className="flex gap-6">
              {["switchWithText1", "switchWithText2"].map((key) => (
                <div key={key} className="flex items-center space-x-2">
                  <Switch
                    id={key}
                    checked={state[key]}
                    onCheckedChange={() => toggle(key)}
                    className="!bg-[#9ca3af] !data-[state=checked]:bg-primary"
                  />
                  <Label
                    htmlFor={key}
                    className={state[key] ? "text-primary font-medium" : ""}
                  >
                    {key.endsWith("1") ? "Yes" : "No"}
                  </Label>
                </div>
              ))}
            </div>
          </DefaultCardComponent>

          {/* ================= SWITCH HORIZONTAL ================= */}
          <DefaultCardComponent title="Switch Horizontal">
            <div className="flex flex-wrap gap-6">
              {[
                "inactiveSwitchHorizonta1",
                "inactiveSwitchHorizonta2",
                "inactiveSwitchHorizonta3",
                "inactiveSwitchHorizonta4",
              ].map((key, i) => (
                <div key={key} className="flex items-center space-x-2">
                  <Switch
                    id={key}
                    checked={state[key]}
                    onCheckedChange={() => toggle(key)}
                    className="!bg-[#9ca3af] !data-[state=checked]:bg-primary"
                  />
                  <Label
                    htmlFor={key}
                    className={state[key] ? "text-primary font-medium" : ""}
                  >
                    Horizontal {i + 1}
                  </Label>
                </div>
              ))}
            </div>
          </DefaultCardComponent>

        </div>
      </LazyWrapper>
    </>
  )
}

export default SwitchPage
