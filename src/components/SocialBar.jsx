import React from 'react';

const SocialBar = () => {
  return (
    <div className="social-bar">
      <ul>
        <li>
          <a
            href="https://www.youtube.com/channel/UCkSUe_beTLmySHEBxxVgKVA?view_as=subscriber"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="YouTube"
          >
            <img
              src="https://static.wixstatic.com/media/78aa2057f0cb42fbbaffcbc36280a64a.png/v1/fill/w_40,h_40,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/78aa2057f0cb42fbbaffcbc36280a64a.png"
              alt="YouTube"
              className="youtube-icon"
            />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default SocialBar;
