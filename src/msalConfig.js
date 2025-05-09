import { PublicClientApplication } from "@azure/msal-browser";

const msalConfig = {
  auth: {
    clientId: "5d661ffe-8c2c-4265-8ee0-8d952333ca7f",
    authority: "https://login.microsoftonline.com/98f175fe-aedd-407c-b281-e74f9ae1bb58",
    redirectUri: "http://localhost:5175",
  }
};

const msalInstance = new PublicClientApplication(msalConfig);

export { msalInstance };
