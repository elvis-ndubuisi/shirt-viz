import React from "react";

import CustomButton from "./CustomButton";

//** Picker for AI generated image */
const AIPicker = ({ prompt, setPrompt, handleSubmit, generatingImg }) => {
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask AI"
        rows={5}
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="aipicker-textarea"
      />

      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            type="outline"
            title="Asking AI..."
            customStyle="text-sm"
          />
        ) : (
          <>
            <CustomButton
              type="outline"
              title="AI Logo"
              handleClick={() => handleSubmit("logo")}
              customStyle="text-sm"
            />

            <CustomButton
              type="filled"
              title="AI Full"
              handleClick={() => handleSubmit("full")}
              customStyles="text-xs"
            />
          </>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
