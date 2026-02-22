import { ArtObject } from "../interfaces/apiTypes";

const formatField = (value: string | undefined): string => {
  return value?.trim() || "-";
};

export const mapArtObject = (obj: any): ArtObject => {
  const fields = [
    `Artist: ${formatField(obj.artistDisplayBio)}`,
    `Date: ${formatField(obj.objectDate)}`,
    `Culture: ${formatField(obj.culture)}`,
    `Period: ${formatField(obj.period)}`,
    `Medium: ${formatField(obj.medium)}`,
    `Classification: ${formatField(obj.classification)}`,
    `Department: ${formatField(obj.department)}`,
    `Credit: ${formatField(obj.creditLine)}`,
  ];

  return {
    id: obj.objectID.toString(),
    title: obj.title || "Untitled",
    webImage: { url: obj.primaryImageSmall || obj.primaryImage || "" },
    fullImage: { url: obj.primaryImage || "" },
    objectNumber: obj.objectID.toString(),
    description: fields.join("\n\n"),
  };
};
