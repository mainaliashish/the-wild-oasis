/* eslint-disable no-undef */
import { useQuery } from "@tanstack/react-query";
import { getSettings } from "../../services/apiSettings";

export function useSetting() {
  const {
    isLoading,
    error,
    data: settings,
  } = useQuery({
    queryKey: ["setting"],
    queryFn: getSettings,
  });

  return { isLoading, error, settings };
}
