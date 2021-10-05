//html
<input type="file" class="file-input"
       [accept]="requiredFileType"
       (change)="onFileSelected($event)" #fileUpload>

//multiple files
<input type="file" class="file-upload" multiple>

<div class="file-upload">

   {{fileName || "No file uploaded yet."}}

    <button mat-mini-fab color="primary" class="upload-btn"
      (click)="fileUpload.click()">
        <mat-icon>attach_file</mat-icon>

    </button>

</div>

<div class="progress">

  <mat-progress-bar class="progress-bar" mode="determinate"
                    [value]="uploadProgress" *ngIf="uploadProgress">

  </mat-progress-bar>

  <mat-icon class="cancel-upload" (click)="cancelUpload()" 
            *ngIf="uploadProgress">delete_forever</mat-icon>

</div>

//component
@Component({
    selector: 'file-upload',
    templateUrl: "file-upload.component.html",
    styleUrls: ["file-upload.component.scss"]
  })
  export class FileUploadComponent {
  
      @Input()
      requiredFileType:string;
  
      fileName = '';
      uploadProgress:number;
      uploadSub: Subscription;
  
      constructor(private http: HttpClient) {}
  
      onFileSelected(event) {
          const file:File = event.target.files[0];
        
          if (file) {
              this.fileName = file.name;
              const formData = new FormData();
              formData.append("thumbnail", file);
  
              const upload$ = this.http.post("/api/thumbnail-upload", formData, {
                  reportProgress: true,
                  observe: 'events'
              })
              .pipe(
                  finalize(() => this.reset())
              );
            
              this.uploadSub = upload$.subscribe(event => {
                if (event.type == HttpEventType.UploadProgress) {
                  this.uploadProgress = Math.round(100 * (event.loaded / event.total));
                }
              })
          }
      }
  
    cancelUpload() {
      this.uploadSub.unsubscribe();
      this.reset();
    }
  
    reset() {
      this.uploadProgress = null;
      this.uploadSub = null;
    }
  }

  //css
  .file-input {
    display: none;
  }

  //usage
  <file-upload requiredFileType="image/png"></file-upload>