import { useState, useRef } from "react";
import { getHumanFileSize } from "helper/common";
export function BrowseFileIcon() {
  return (
    <svg fill="none" viewBox="0 0 17 16" xmlns="http://www.w3.org/2000/svg">
      <g
        clipPath="url(#a)"
        stroke="#26246F"
        strokeLinecap="round"
        strokeWidth="1.5"
      >
        <path d="M5.167 12a3.21 3.21 0 01-2.218-.879A2.935 2.935 0 012.03 9c0-.796.33-1.559.919-2.121A3.21 3.21 0 015.167 6c.196-.875.77-1.644 1.597-2.138a3.98 3.98 0 011.35-.5 4.149 4.149 0 011.46.005c.482.087.94.26 1.347.506.408.247.757.563 1.029.932.272.368.46.78.554 1.215.095.434.093.88-.004 1.313h.667a2.333 2.333 0 110 4.667H12.5" />
        <path d="M6.5 10l2-2 2 2M8.5 8v6" />
      </g>
      <defs>
        <clipPath id="a">
          <path d="M0 0h16v16H0z" fill="#fff" transform="translate(.5)" />
        </clipPath>
      </defs>
    </svg>
  );
}
export function PDFIcon() {
  return (
    <svg fill="none" viewBox="0 0 25 32" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M1.042.04C.76.095.417.407.229.776l-.187.37-.02 10.177L.01 21.502H24.893l-.012-7.145c-.013-5.715-.038-7.178-.1-7.328-.126-.281-6.615-6.758-6.928-6.908-.25-.125-.406-.125-8.471-.119-4.52.006-8.271.025-8.34.037zM20.41 4.415c1.595 1.594 2.814 2.863 2.839 2.95.025.113 0 .182-.107.27-.13.106-.325.112-3.07.112h-2.931V4.76c0-2.238.018-3.007.075-3.064.225-.225.312-.15 3.194 2.72zm-7.496.206c.15.144.32.344.37.457.224.475.193 1.244-.126 2.82l-.156.8.3.575c.563 1.063 1.35 2.244 2.075 3.1.194.226.363.426.382.45.025.026.306.007.631-.043 1.132-.175 2.151-.1 2.595.194.363.237.438.75.181 1.263-.425.856-1.338 1.113-2.288.644-.363-.182-.556-.32-1.2-.838l-.22-.175-.956.25c-1.156.3-2.038.588-3.1 1l-.795.32-.331.655c-.7 1.413-1.457 2.42-2.026 2.708-.45.218-.787.168-1.163-.194-1.062-1.013-.256-2.326 2.201-3.564l.62-.312.2-.45c.53-1.163 1.23-3.12 1.656-4.614l.244-.863-.25-.632c-.138-.344-.325-.9-.413-1.231-.338-1.307-.05-2.32.7-2.501.47-.106.582-.081.87.181z"
        fill="#C40031"
      />
      <path
        d="M12.137 5.63c-.18.405-.168.88.038 1.23l.169.282.087-.212c.2-.476.157-1.3-.075-1.495-.081-.062-.112-.03-.219.194zM12.61 10.13c-.018.05-.174.538-.356 1.088-.175.55-.487 1.432-.687 1.963-.207.532-.37.97-.37.976 0 .012.476-.144 1.051-.338.582-.2 1.37-.438 1.75-.538.388-.1.7-.2.7-.219 0-.018-.112-.175-.255-.343a24.15 24.15 0 01-1.438-2.076c-.213-.35-.376-.563-.394-.513zM16.823 13.675c0 .119.6.506.781.513.425.006.944-.363.713-.507-.106-.068-1.494-.075-1.494-.006zM8.743 16.42c-.238.15-.594.438-.8.631-.413.4-.482.645-.244.857.125.113.13.113.456-.225.288-.294 1.088-1.476 1.032-1.526-.013-.006-.213.113-.444.263zM.019 26.86c.019 4.727-.006 4.452.456 4.809.463.35-.231.33 11.973.33 12.203 0 11.51.02 11.972-.33.463-.357.438-.082.456-4.808l.02-4.233H0l.019 4.233zm8.19-2.4c.419.206.813.619.913.969.23.775-.044 1.626-.663 2.02-.375.237-.6.293-1.307.343l-.581.044v1.982h-.875V24.24l1.081.025c1.032.019 1.088.025 1.432.194zm4.501-.138c.713.157 1.457.688 1.75 1.27.545 1.062.332 2.732-.443 3.526-.538.55-1.188.712-2.726.687l-1-.018-.019-2.77-.013-2.763h1.057c.588 0 1.213.03 1.394.068zm6.865.276v.343H17.012v1.751H19.325v.625H17.012v2.5h-.938V24.255h3.5v.343z"
        fill="#C40031"
      />
      <path
        d="M6.573 26.042v1.1l.594-.025c.669-.025.856-.119 1.044-.494.169-.325.15-.975-.031-1.25-.213-.325-.488-.431-1.088-.431h-.52v1.1zM11.198 27.03v2.1h.625c1.056 0 1.513-.263 1.82-1.044.112-.3.143-.488.143-1.082.006-.844-.063-1.094-.413-1.475-.362-.394-.762-.544-1.531-.575l-.644-.025v2.1z"
        fill="#C40031"
      />
    </svg>
  );
}
const FileInput = ({
  id,
  value,
  onChange = (e) => {},
  error,
  register,
  ...props
}) => {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    if (onChange) {
      onChange(e);
    }
  };
  return (
    <>
      <label htmlFor={id} className="as-file-input">
        <input
          type="file"
          id={id}
          value={value}
          {...props}
          onChange={handleFileChange}
          ref={register}
        />
        <div className="as-file-input-content">
          <div className="as-file-input-label">
            Choose a file or drag & drop it here
          </div>
          <div className="as-file-input-description">PDF up to 5 MB.</div>
        </div>
        <div className="as-file-input-icon">
          <BrowseFileIcon /> Browse File
        </div>
        {error && <div className="error-message">{error}</div>}
      </label>
      {file && (
        <div className="as-file-input-preview">
          <div>
            <PDFIcon />
          </div>
          <div className="as-file-input-preview-content">
            <div>
              <div className="as-file-input-preview-name filename">
                {file?.name}
              </div>
              <div className="as-file-input-preview-size filesize">
                {getHumanFileSize(file?.size)}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FileInput;