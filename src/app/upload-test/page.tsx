import FileUpload from "@/components/FileUpload";

export default function UploadTestPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-950 dark:via-slate-900 dark:to-indigo-950 py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-2 text-slate-900 dark:text-white">
          File Upload Test
        </h1>
        <p className="text-center text-slate-600 dark:text-slate-400 mb-12">
          Test your Vercel Blob Storage integration
        </p>
        
        <FileUpload />
        
        <div className="mt-12 p-6 bg-white dark:bg-slate-900 rounded-xl shadow-lg">
          <h2 className="text-xl font-semibold mb-4 text-slate-900 dark:text-white">
            Storage Information
          </h2>
          <div className="space-y-2 text-sm">
            <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-600 dark:text-slate-400">Provider:</span>
              <span className="font-medium text-slate-900 dark:text-white">Vercel Blob Storage</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-600 dark:text-slate-400">Status:</span>
              <span className="font-medium text-green-600 dark:text-green-400">✅ Connected</span>
            </div>
            <div className="flex justify-between py-2 border-b border-slate-200 dark:border-slate-700">
              <span className="text-slate-600 dark:text-slate-400">Max File Size:</span>
              <span className="font-medium text-slate-900 dark:text-white">5MB</span>
            </div>
            <div className="flex justify-between py-2">
              <span className="text-slate-600 dark:text-slate-400">Supported Formats:</span>
              <span className="font-medium text-slate-900 dark:text-white">JPG, PNG, GIF, WebP, SVG</span>
            </div>
          </div>
          <div className="mt-6 p-4 bg-blue-50 dark:bg-blue-950/20 rounded-lg">
            <p className="text-sm text-blue-700 dark:text-blue-300">
              💡 <strong>Tip:</strong> Uploaded files are stored in Vercel Blob and persist across deployments. 
              Each upload returns a permanent URL that can be used anywhere in your application.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
