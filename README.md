# Care Book

**Care Book** is a Next.js-powered application designed for managing kindergarten branches, students, and their details. It integrates Supabase as the backend service for database management and authentication.

---

## Prerequisites

Before setting up the project, ensure you have the following installed:

- **Node.js** (v16+)
- **npm** (or **yarn**) for package management
- **Supabase CLI**
- **Docker** (for local Supabase setup)

---

## Setup Instructions

### 1. Clone the Repository

```bash
git clone <repository-url>
cd care-book
```

### 2. Install Dependencies

```bash
npm install
```

### 3. Set Up Supabase Locally

#### Step 1: Initialize Supabase

```bash
supabase init
```

#### Step 2: Start Supabase Locally

```bash
supabase start
```

### 4. Create Environment Variables

Copy the example environment file:

```bash
cp .env.example .env
```

---

### 5. Run the Application

Start the development server:

```bash
npm run dev
```

The application will be accessible at `http://localhost:3000`.

---

## Features

- Manage multiple kindergarten branches.
- Organize student information with guardianship and unique IDs.
- Generate lanyard-style cards with QR codes for each student.
- Secure authentication using Supabase.

---

## License

This project is licensed under the MIT License.
