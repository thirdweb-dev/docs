import React from "react";

type Props = {};

export default function FeedbackFooter({}: Props) {
  const [submissionState, setSubmissionState] = React.useState<
    "pending" | "open" | "answered"
  >("pending");

  const [feedback, setFeedback] = React.useState<string>("");

  async function handleSubmit(answer: boolean) {
    if (answer === true) {
      setSubmissionState("answered");
    }
    if (answer === false) {
      setSubmissionState("open");
    }
    sendPosthogEvent(answer);
  }

  async function sendPosthogEvent(value: boolean) {
    const posthog = window?.posthog;

    console.log(posthog);

    if (posthog) {
      posthog.capture("Portal Feedback", {
        response: value.toString(),
      });
    }
  }

  async function handleSubmitText(text: string) {
    const posthog = window?.posthog;

    console.log(posthog);

    if (posthog) {
      posthog.capture("Portal Feedback", {
        text: text,
      });
    }
  }

  // User hasn't clicked yes or no yet
  if (submissionState === "pending") {
    return (
      <div className="feedback card">
        <p className="feedback-title">Was this page helpful?</p>
        <button className="feedback-button" onClick={() => handleSubmit(true)}>
          <img src="/assets/feedback/thumbs_up.png" alt="thumbs up" />
          Yes
        </button>
        <button className="feedback-button" onClick={() => handleSubmit(false)}>
          <img src="/assets/feedback/thumbs_down.png" alt="thumbs up" />
          No
        </button>
      </div>
    );
  }

  // User clicked yes
  if (submissionState === "answered") {
    return (
      <div className="feedback card">
        <p className="feedback-title" style={{ width: "auto" }}>
          Thanks for your feedback 🙏
        </p>
      </div>
    );
  }

  // User clicked no (show feedback form)
  if (submissionState === "open") {
    return (
      <div
        className="feedback-form card"
        style={{
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <p className="feedback-form-title" style={{ width: "100%" }}>
          Sorry about that 😔
        </p>
        <p className="feedback-form-title">
          Please describe the issue you faced so that we can improve the page.
        </p>
        <textarea
          className="feedback-form-input"
          style={{ resize: "none" }}
          onChange={(e) => setFeedback(e.target.value)}
        />

        <button
          className="feedback-button"
          style={{ width: "auto", marginTop: 16 }}
          onClick={() => {
            handleSubmitText(feedback);
          }}
        >
          Send feedback
        </button>
      </div>
    );
  }
}
