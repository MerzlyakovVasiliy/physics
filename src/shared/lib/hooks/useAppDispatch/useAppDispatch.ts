import { useDispatch } from "react-redux";
import { AppDispatch } from "@/app/store/config/store.ts";

export const useAppDispatch = useDispatch.withTypes<AppDispatch>()