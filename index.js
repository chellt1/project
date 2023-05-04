const url = require("url");

const parseUrl = (urlString) => {
  const parsedUrl = new URL(urlString);
  return {
    scheme: parsedUrl.protocol.replace(":", ""),
    domain: parsedUrl.hostname,
    port: parsedUrl.port,
    path: parsedUrl.pathname,
    query: Object.fromEntries(parsedUrl.searchParams),
    fragment: parsedUrl.hash.replace("#", ""),
  };
};

const explainUrlComponents = (urlString) => {
  const { scheme, domain, port, path, query, fragment } = parseUrl(urlString);
  let result = `Scheme: ${scheme}\n`;
  result += `Domain: ${domain}\n`;
  if (port) {
    result += `Port: ${port}\n`;
  }
  result += `Path: ${path}\n`;
  if (Object.keys(query).length > 0) {
    result += "Query parameters:\n";
    for (const [key, value] of Object.entries(query)) {
      result += `- ${key}: ${value}\n`;
    }
  }
  if (fragment) {
    result += `Fragment identifier: ${fragment}\n`;
  }
  return result;
};

const parseMultipleUrls = (urlArray) => {
  return urlArray.map(parseUrl);
};
console.log(
  "Завдання 1",
  parseUrl(
    "https://subdomain.example.com:8080/path/to/page?query=string&some_part=1"
  )
);
console.log(
  "Завдання 2",
  explainUrlComponents(
    "https://subdomain.example.com:8080/path/to/page?query=string&some_part=1"
  )
);
console.log(
  "Завдання 3",
  parseMultipleUrls([
    "https://subdomain.example.com:8080/path/to/page?query=string&some_part=1",
    "https://subdomain.example.com:8080/path/to/page?query=string&some_part=2",
  ])
);
module.exports = {
  parseUrl,
  explainUrlComponents,
  parseMultipleUrls,
};
