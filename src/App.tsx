import "@/App.css";
import { useState } from "react";
import Youtube from "react-youtube-liteframe";

function App() {
  const [videoApp, setVideoApp] = useState({
    videoTitle: false,
    ytImpression: false,
    short: false,
  });
  const videoTitle = videoApp.videoTitle
    ? videoApp.short
      ? "Return Types vs Inference #typescript"
      : "6 TypeScript tips to turn you into a WIZARD"
    : undefined;
  return (
    <>
      <header>Demo</header>
      <main>
        <article>
          <Youtube
            videoID={videoApp.short ? "pbjDMJl2ufQ" : "lraHlXpuhKs"}
            videoTitle={videoTitle}
            ytImpression={videoApp.ytImpression}
            short={videoApp.short}
          />
          <p>
            <code>
              {`<Youtube 
                      videoID="iHlyXfFLQgA"
                      ${
                        videoApp.videoTitle ? `videoTitle="${videoTitle}" ` : ""
                      }
                      ytImpression=${
                        videoApp.ytImpression ? "{true}" : "{false}"
                      }
              short=${videoApp.short ? "{true}" : "{false}"}
                />`}
            </code>
          </p>
          <fieldset>
            <legend>Preview settings</legend>
            <div>
              <input
                type="checkbox"
                checked={videoApp.videoTitle}
                id="videoTitle"
                onChange={() =>
                  setVideoApp((prev) => ({
                    ...prev,
                    videoTitle: !prev.videoTitle,
                  }))
                }
              />
              <label htmlFor="videoTitle">Video Title</label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={videoApp.ytImpression}
                id="ytImpression"
                onChange={() =>
                  setVideoApp((prev) => ({
                    ...prev,
                    ytImpression: !prev.ytImpression,
                  }))
                }
              />
              <label htmlFor="ytImpression">Youtube Impression</label>
            </div>
            <div>
              <input
                type="checkbox"
                checked={videoApp.short}
                id="short"
                onChange={() =>
                  setVideoApp((prev) => ({
                    ...prev,
                    short: !prev.short,
                  }))
                }
              />
              <label htmlFor="short">Short</label>
            </div>
          </fieldset>
        </article>
      </main>
    </>
  );
}

export default App;
