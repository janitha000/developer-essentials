//use content projection with ng-content

//app.component.ts
<app-widget>
    <app-weather><app-weather/>
</app-widget>
<app-widget>
    <app-task><app-task/>
</app-widget>



//app-widget.component.ts
<div>
    <p>What ever common things </p>
    <ng-content></ng-content>
</div>


//weather.component.ts app-weather
<div>
<p>This is weather component </p>
</div>


//task.component.ts app-task
<div>
<p>This is task component </p>
</div>

