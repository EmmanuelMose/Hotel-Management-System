import {
  pgTable,
  serial,
  varchar,
  text,
  timestamp,
  integer,
  real,
  boolean,
  pgEnum,
} from "drizzle-orm/pg-core";

// Enums
export const roleEnum = pgEnum("Role", ["User", "Admin"]);
export const bookingStatusEnum = pgEnum("BookingStatus", ["Pending", "Confirmed", "Cancelled"]);
export const paymentStatusEnum = pgEnum("PaymentStatus", ["Pending", "Completed", "Failed"]);
export const ticketStatusEnum = pgEnum("TicketStatus", ["Open", "Resolved"]);

// Tables

export const users = pgTable("Users", {
  userId: serial("UserId").primaryKey(),
  firstName: varchar("FirstName", { length: 100 }),
  lastName: varchar("LastName", { length: 100 }),
  email: varchar("Email", { length: 255 }).unique(),
  password: varchar("Password", { length: 255 }),
  contactPhone: varchar("ContactPhone", { length: 20 }),
  address: text("Address"),
  role: roleEnum("Role").default("User"),
  createdAt: timestamp("CreatedAt").defaultNow(),
  updatedAt: timestamp("UpdatedAt").defaultNow(),
  isVerified: boolean("IsVerified").default(false),                        
  verificationCode: varchar("VerificationCode", { length: 10 }).default("000000"), 
});

export const hotels = pgTable("Hotels", {
  hotelId: serial("HotelId").primaryKey(),
  name: varchar("Name", { length: 255 }),
  location: varchar("Location", { length: 255 }),
  address: text("Address"),
  contactPhone: varchar("ContactPhone", { length: 20 }),
  category: varchar("Category", { length: 100 }),
  imgUrl: varchar("img_url", { length: 255 }).notNull(),
  rating: real("Rating"),
  createdAt: timestamp("CreatedAt").defaultNow(),
  updatedAt: timestamp("UpdatedAt").defaultNow(),
  description: varchar("description", { length: 500 }).notNull(),
});

export const rooms = pgTable("Rooms", {
  roomId: serial("RoomId").primaryKey(),
  hotelId: integer("HotelId").references(() => hotels.hotelId, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }),
  roomType: varchar("RoomType", { length: 100 }),
  pricePerNight: real("PricePerNight"),
  capacity: integer("Capacity"),
  amenities: text("Amenities"),
  isAvailable: boolean("IsAvailable").default(true),
  createdAt: timestamp("CreatedAt").defaultNow(),
});

export const bookings = pgTable("Bookings", {
  bookingId: serial("BookingId").primaryKey(),
  userId: integer("UserId").references(() => users.userId, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }),
  roomId: integer("RoomId").references(() => rooms.roomId, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }),
  checkInDate: timestamp("CheckInDate"),
  checkOutDate: timestamp("CheckOutDate"),
  totalAmount: real("TotalAmount"),
  bookingStatus: bookingStatusEnum("BookingStatus").default("Pending"),
  createdAt: timestamp("CreatedAt").defaultNow(),
  updatedAt: timestamp("UpdatedAt").defaultNow(),
});

export const payments = pgTable("Payments", {
  paymentId: serial("PaymentId").primaryKey(),
  bookingId: integer("BookingId").references(() => bookings.bookingId, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }),
  amount: real("Amount"),
  paymentStatus: paymentStatusEnum("PaymentStatus").default("Pending"),
  paymentDate: timestamp("PaymentDate").defaultNow(),
  paymentMethod: varchar("PaymentMethod", { length: 100 }),
  transactionId: varchar("TransactionId", { length: 255 }),
  createdAt: timestamp("CreatedAt").defaultNow(),
  updatedAt: timestamp("UpdatedAt").defaultNow(),
});

export const customerSupportTickets = pgTable("CustomerSupportTickets", {
  ticketId: serial("TicketId").primaryKey(),
  userId: integer("UserId").references(() => users.userId, {
    onDelete: "cascade",
    onUpdate: "cascade",
  }),
  subject: varchar("Subject", { length: 255 }),
  description: text("Description"),
  status: ticketStatusEnum("Status").default("Open"),
  createdAt: timestamp("CreatedAt").defaultNow(),
  updatedAt: timestamp("UpdatedAt").defaultNow(),
});

// Relationships (for reference)

export const userToBookings = {
  one: users.userId,
  many: bookings.userId,
};

export const userToTickets = {
  one: users.userId,
  many: customerSupportTickets.userId,
};

export const hotelToRooms = {
  one: hotels.hotelId,
  many: rooms.hotelId,
};

export const roomToBookings = {
  one: rooms.roomId,
  many: bookings.roomId,
};

export const bookingToPayment = {
  one: bookings.bookingId,
  onetoone: payments.bookingId,
};
