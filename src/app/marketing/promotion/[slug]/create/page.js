import "./page.css";
import DropDownBasic from "@/components/DropDownBasic/DropDownBasic";

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
          <div className="border-bottom-lightgrey panel-header">
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
            {/* <select>
              <option>Professional</option>
            </select> */}
            <DropDownBasic options={toneOptions} />

            <button>Regenerate</button>
          </div>

          <div className="panel-footer">
            <a href="#">Learn more about Google ads</a>
          </div>
        </div>

        <div className="panel main">Lorem ipsom...</div>
      </div>
    </main>
  );
}
