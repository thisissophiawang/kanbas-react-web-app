//src/Kanbas/Courses/Assignments/client.tsx

import axios from "axios";
const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;
const COURSES_API = `${REMOTE_SERVER}/api/courses`;
const ASSIGNMENTS_API = `${REMOTE_SERVER}/api/assignments`;

// Create a new assignment
export const createAssignment = async (courseId: string, assignment: any) => {
    const response = await axios.post(
        `${COURSES_API}/${courseId}/assignments`,
        assignment
    );
    return response.data;
};

// Update an assignment
export const updateAssignment = async (assignment: any) => {
    const response = await axios.put(
        `${ASSIGNMENTS_API}/${assignment._id}`,
        assignment
    );
    return response.data;
};

// Delete an assignment
export const deleteAssignment = async (assignmentId: string) => {
    const response = await axios.delete(`${ASSIGNMENTS_API}/${assignmentId}`);
    return response.data;
};

// Find all assignments for a course
export const findAssignmentsForCourse = async (courseId: string) => {
    const response = await axios.get(`${COURSES_API}/${courseId}/assignments`);
    return response.data;
};