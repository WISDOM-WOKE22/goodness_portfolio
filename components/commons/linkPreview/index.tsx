import { useEffect, useState } from 'react';

interface LinkPreviewProps {
  url: string;
}

interface OpenGraphImage {
  url: string;
  alt?: string;
}

interface PreviewData {
  title?: string;
  description?: string;
  open_graph?: {
    images?: OpenGraphImage[];
  };
}

export default function LinkPreview({ url }: LinkPreviewProps) {
  const [data, setData] = useState<PreviewData | null>(null);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    const fetchPreview = async () => {
      try {
        const res = await fetch(`/api/preview?url=${encodeURIComponent(url)}`);
        if (!res.ok) throw new Error('Failed to fetch preview');
        const json = await res.json();
        console.log("data",json.open_graph);
        setData(json);
      } catch (err) {
        setError(true);
        console.log({err})
      }
    };

    fetchPreview();
  }, [url]);

  if (error) return <div className="text-red-500">Failed to load preview.</div>;
  if (!data) return <div className="text-gray-500">Loading preview...</div>;

  const imageUrl = data.open_graph?.images?.[0]?.url;

  return (
    <div className="max-w-md rounded border border-gray-300 overflow-hidden shadow-sm flex">
      {imageUrl && (
        // eslint-disable-next-line @next/next/no-img-element
        <img
          src={imageUrl}
          alt={data.title || 'Link preview'}
          className="w-32 object-cover"
        />
      )}
      <div className="p-4">
        <h3 className="font-semibold text-lg">{data.title}</h3>
        <p className="text-sm text-gray-600">{data.description}</p>
        <a href={url} className="text-blue-500 text-xs mt-2 inline-block" target="_blank" rel="noopener noreferrer">
          {url}
        </a>
      </div>
    </div>
  );
}
