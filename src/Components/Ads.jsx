
import { useEffect } from 'react';

export const Ads = () => {
  useEffect(() => {
    // Check if the script already exists to prevent duplication
    if (!document.querySelector(`script[src="//dear-soil.com/bKX_VTsMd.G/lD0ZYhWqdYitYmW/5/u_ZZXeIK/BeKm/9-uNZLUblOkPP/TrUU3MMYT/UvwEMYDVM/tbN/Tuc/xbNqTcAXwhNXAJ"]`)) {
      const script = document.createElement('script');
      script.src = "//dear-soil.com/bKX_VTsMd.G/lD0ZYhWqdYitYmW/5/u_ZZXeIK/BeKm/9-uNZLUblOkPP/TrUU3MMYT/UvwEMYDVM/tbN/Tuc/xbNqTcAXwhNXAJ";
      script.async = true;
      script.referrerPolicy = 'no-referrer-when-downgrade';

      const bannerElement = document.getElementById('banner');
      if (bannerElement) {
        bannerElement.appendChild(script);
      }
    }
  }, []);

  return null;
};
