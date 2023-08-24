import { useEffect, useState } from "react";
import SubTask from "../components/subtask";
import { useDispatch } from "react-redux";
import { donePhase } from "@/states/phaseSlice";
import { getStatus } from "../utils";

import Upload from "./upload";
import Trim from "./trim";
import Script from "./script";
import Scenario from "./scenario";
import { testApi } from "@/apis/lab";

const Gen = () => {
  const [step, setStep] = useState<number>(1);
  const dispatch = useDispatch();

  useEffect(() => {
    testApi();
  }, []);

  const onNext = () => {
    if (step == 4) {
      dispatch(donePhase());
    }
    setStep((prevStep) => prevStep + 1);
  };

  return (
    <>
      <SubTask
        type="short"
        title="Upload your video"
        subtitle="Choose an English video that is smaller than 25MB in size."
        status={getStatus(1, step)}
        onNext={onNext}
      >
        <Upload />
      </SubTask>
      <SubTask
        type="short"
        title="Trim the video"
        subtitle="Ensure trimming is completed at least once, before clicking Next"
        status={getStatus(2, step)}
        onNext={onNext}
      >
        <Trim />
      </SubTask>
      <SubTask
        type="short"
        title="Confirm the transcript and highlight"
        subtitle="This is the test task3 and the subtitle"
        status={getStatus(3, step)}
        onNext={onNext}
      >
        <Script />
      </SubTask>
      <SubTask
        type="short"
        title="Write the dialogue scenario"
        subtitle="This is the test task4 and the subtitle"
        status={getStatus(4, step)}
        onNext={onNext}
      >
        <Scenario />
      </SubTask>
    </>
  );
};

export default Gen;
