import "./page.css";
import DropDownBasic from "@/components/DropDownBasic/DropDownBasic";
import ButtonSecondary from "@/components/ButtonSecondary/ButtonSecondary";

const toneOptions = [
  { id: 1, name: "Professional" },
  { id: 2, name: "Casual" },
];

export default function PromotionCreate({ params }) {
  console.log("PromotionCreate params.slug", params.slug);

  return (
    <main>
      <div className="flex-create-wrapper">
        <div className="panel left">
          <div className="panel-header border-bottom-lightgrey">
            <h2 className="heading-create">Details</h2>
            <p>
              Provide us with the following details and we'll generate a Google
              ad for you.
            </p>
          </div>

          <div className="panel-body">
            <span className="title">What's this ad about?</span>
            <textarea></textarea>

            <span className="title">Tone of voice</span>
            <DropDownBasic options={toneOptions} />

            <ButtonSecondary label="Regenerate" />
          </div>

          <div className="panel-footer">
            <a href="#" className="icon_open">
              Learn more about Google ads
            </a>
          </div>
        </div>

        <div className="panel main">
          <div className="panel-header border-bottom-lightgrey">
            <h2 className="heading-create">Preview</h2>
          </div>
          <div className="panel-body">dasdasfsd sdvsd</div>
        </div>
      </div>
    </main>
  );
}
