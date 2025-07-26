import { CourseDetailsType, ResponseData } from "../types/course.types";
import ApiClient from "../utils/apiClient";

export const courseService = {
    fetchCourseDetails: async (): Promise<ResponseData> => {
        const res = await ApiClient.get<CourseDetailsType>("/products/ielts-course");

        if (!res?.data) {
            throw new Error("Course details not found");
        }

        return res.data;
    },
}