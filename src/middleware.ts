import { NextRequest, NextResponse } from "next/server";
const isLoggedIn: boolean = false;

const middleware = (request: NextRequest) => {
  

  return NextResponse.next();
};

export {middleware};
