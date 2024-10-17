declare module '*.json' {
  const value: { [key: string]: string }
  export default value
}

declare module '*/common.json' {
  const value: { [key: string]: string }
  export = value
}
