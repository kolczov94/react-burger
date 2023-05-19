type TSetCookieProps = {
  path?: string;
  domain?: string;
  secure?: true;
  samesite?: "strict" | "lax";
  expires?: Date | number | string;
  "max-age"?: number;
};

export function setCookie(name: string, value: string, props: TSetCookieProps) {
  let exp = props.expires;
  if (typeof exp === "number" && exp) {
    const d = new Date();
    d.setTime(d.getTime() + exp * 1000);
    exp = props.expires = d;
  }
  if (exp instanceof Date && exp.toUTCString) {
    props.expires = exp.toUTCString();
  }
  value = encodeURIComponent(value);
  let updatedCookie = name + "=" + value;
  for (const propName in props) {
    updatedCookie += "; " + propName;
    const propValue = props[propName as keyof TSetCookieProps];
    if (propValue && propValue !== true) {
      updatedCookie += "=" + propValue;
    }
  }
  document.cookie = updatedCookie;
}

export function getCookie(name: string) {
  const matches = document.cookie.match(
    new RegExp(
      "(?:^|; )" + name.replace(/([.$?*|{}()[\]\\/+^])/g, "\\$1") + "=([^;]*)"
    )
  );
  console.log("MATCHES", matches);
  console.log("COOKEI", document.cookie);
  return matches ? decodeURIComponent(matches[1]) : undefined;
}

export function deleteCookie(name: string) {
  setCookie(name, "", {
    "max-age": -1,
    path: "/",
  });
}
