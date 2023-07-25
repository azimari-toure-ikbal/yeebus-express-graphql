export default function baseAPIURL() {
  return process.env.ENVIRONMENT
    ? process.env.ENVIRONMENT == "production"
      ? "http://baseAPIURLPRODUCTION/something"
      : "http://localhost:8080/api"
    : "http://localhost:8080/api";
}
