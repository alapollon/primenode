# npm audit report

path-to-regexp  <0.1.12
Severity: moderate
Unpatched `path-to-regexp` ReDoS in 0.1.x - https://github.com/advisories/GHSA-rhx6-c78j-4q9w
fix available via `npm audit fix`
node_modules/express/node_modules/path-to-regexp
  express  4.0.0-rc1 - 4.21.1 || 5.0.0-alpha.1 - 5.0.0-beta.3
  Depends on vulnerable versions of path-to-regexp
  node_modules/express
    @nestjs/platform-express  <=10.4.13
    Depends on vulnerable versions of express
    node_modules/@nestjs/platform-express

3 moderate severity vulnerabilities

To address all issues, run:
  npm audit fix
