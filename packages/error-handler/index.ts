

export class AppError extends Error {
  public readonly statusCode: number;
  public readonly isOperational?: boolean;
  public readonly details?:any;

  constructor (message:string,statusCode:number,isOperational:true,details?:any){
    super(message);
    this.statusCode = statusCode;
    this.isOperational = isOperational;
    this.details = details;
    Error.captureStackTrace(this);
  } 
}

// Not Found Error
export class NotFoundError extends AppError {
  constructor(message="Resources not found"){
    super(message, 404, true, undefined);
  }
}

//validation Error
export class ValidationError extends AppError {
  constructor(message="Invalid request data",details?:any){
    super(message,400,true,details);
  }
}

// Authentication Error
export class AuthenticationError extends AppError {
  constructor(message="Authentication failed"){
    super(message,401,true,undefined);
  }
}

// Forbidden Error (For Insufficient Permissions)
export class ForbiddenError extends AppError {
  constructor(message="Access denied"){
    super(message,403,true,undefined);
  }
}

// Database Error(For mongodb/postgres error)
export class DatabaseError extends AppError {
  constructor(message="Database error",details:any){
    super(message,500,true,details);
  }
}

// Rate Limit Error (For Too Many Requests)
export class RateLimitError extends AppError {
  constructor(message="Too many requests"){
    super(message,429,true,undefined);
  }
}