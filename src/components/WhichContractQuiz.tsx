import React, { useState } from "react";
import DeployThisContractButton from "./DeployThisContractButton";

export default function WhichContractQuiz() {
  const [questionIndex, setQuestionIndex] = useState<number>(0);

  // Middle steps
  const [tokenType, setTokenType] = useState<"nft" | "token" | undefined>();
  const [nftType, setNftType] = useState<"nft" | "edition" | undefined>();

  // Final result
  const [answer, setAnswer] = useState<string>();

  const questions = [
    // Decide which kind of project they're using
    {
      questionTitle: "What kind of project are you building?",
      options: [
        {
          title: "NFTs",
          image: "/assets/icons/nft.png",
          onSelect: () => {
            setTokenType("nft");
            setQuestionIndex(1);
          },
        },
        {
          title: "Tokens",
          image: "/assets/icons/token.png",
          onSelect: () => {
            setTokenType("token");
            setQuestionIndex(2);
          },
        },
        {
          title: "Marketplace",
          image: "/assets/icons/marketplace.png",
          onSelect: () => {
            setAnswer("marketplace");
          },
        },
        {
          title: "Other",
          image: "/assets/icons/split.png",
          onSelect: () => {
            setQuestionIndex(4);
          },
        },
      ],
    },

    // If NFTs, decide if ERC-1155 or ERC-721/(A)
    {
      questionTitle: "Do you want to have multiple copies of the same NFT?",
      options: [
        {
          title: "No",
          image: "/assets/icons/nft.png",
          onSelect: () => {
            setNftType("nft");
            setQuestionIndex(2);
          },
        },
        {
          title: "Yes",
          image: "/assets/icons/edition.png",
          onSelect: () => {
            setNftType("edition");
            setQuestionIndex(2);
          },
        },
      ],
    },

    // Decide drop or not
    {
      questionTitle:
        "Do you want your tokens to be minted (claimed) by other people?",
      options: [
        {
          title: "No",
          image: "/assets/icons/nft.png",
          onSelect: () => {
            if (tokenType === "nft") {
              if (nftType === "nft") {
                setAnswer("nft-collection");
              }
              if (nftType === "edition") {
                setAnswer("edition");
              }
            }

            if (tokenType === "token") {
              setAnswer("token");
            }
          },
        },
        {
          title: "Yes",
          image: "/assets/icons/drop.png",
          onSelect: () => {
            if (tokenType === "nft") {
              if (nftType === "nft") {
                setQuestionIndex(3);
              }
              if (nftType === "edition") {
                setAnswer("edition-drop");
              }
            }

            if (tokenType === "token") {
              setAnswer("token-drop");
            }
          },
        },
      ],
    },

    // ERC-721 or ERC-721A
    {
      questionTitle: "Do you need multiple claim phases for your drop?",
      options: [
        {
          title: "No",
          image: "/assets/icons/drop.png",
          onSelect: () => {
            setAnswer("signature-drop");
          },
        },
        {
          title: "Yes",
          image: "/assets/icons/teams.png",
          onSelect: () => {
            setAnswer("nft-drop");
          },
        },
      ],
    },

    // End up here if you select other (decide split or vote)
    {
      questionTitle: "What do you want to build?",
      options: [
        {
          title: "Vote",
          image: "/assets/icons/vote.png",
          onSelect: () => {
            setAnswer("vote");
          },
        },
        {
          title: "Revenue Split",
          image: "/assets/icons/token.png",
          onSelect: () => {
            setAnswer("split");
          },
        },
        {
          title: "Pack / Lootbox",
          image: "/assets/icons/pack.png",
          onSelect: () => {
            setAnswer("pack");
          },
        },
        {
          title: "Token Wrap",
          image: "/assets/icons/report.png",
          onSelect: () => {
            setAnswer("multiwrap");
          },
        },
      ],
    },
  ];

  function formatName(name: string) {
    // Replace - with space and capitalize
    let newName = name.replace("-", " ");

    // Capitalize first letter of each word
    newName = newName
      .split(" ")
      .map((word) => {
        return word.charAt(0).toUpperCase() + word.slice(1);
      })
      .join(" ");

    // Capitalize "Nft"
    if (newName.includes("Nft")) {
      newName = newName.replace("Nft", "NFT");
    }

    return newName;
  }

  if (answer) {
    return (
      <div
        className="quiz-container"
        style={{
          display: "flex",
          flexDirection: "column",
          textAlign: "center",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {/* Capitalize first letter of answer */}
        <h3>{formatName(answer)}</h3>
        <p>
          Based on your answers, we recommend using the{" "}
          <a href={`/pre-built-contracts/${answer}`}>{formatName(answer)}</a>{" "}
          pre-built contract!
        </p>

        <div style={{ maxWidth: "fit-content" }}>
          <DeployThisContractButton contractType={answer} />
        </div>

        <a
          onClick={() => {
            // Reset all state
            setQuestionIndex(0);
            setTokenType(undefined);
            setNftType(undefined);
            setAnswer(undefined);
          }}
          style={{
            cursor: "pointer",
            fontSize: "0.9rem",
            marginTop: 16,
          }}
        >
          Reset Form
        </a>
      </div>
    );
  }

  return (
    <div className="quiz-container">
      <h4 style={{ marginBottom: 32 }}>
        {questions[questionIndex].questionTitle}
      </h4>

      <div className="row">
        {questions[questionIndex].options.map((option, index) => (
          <a
            key={option.title}
            className="col col--6"
            style={{
              color: "inherit",
              textDecoration: "none",
              width: "100%",
              padding: 8,
            }}
            onClick={() => option.onSelect()}
          >
            <div
              className="tw-card"
              style={{
                cursor: "pointer",
                height: "100%",
                width: "100%",
              }}
            >
              <div
                className="card__header quiz-option"
                style={{ width: "100%" }}
              >
                <img
                  src={option.image}
                  style={{ pointerEvents: "none", width: 42 }}
                />
                <div className="card__body" style={{ pointerEvents: "none" }}>
                  <h5>{option.title}</h5>
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
