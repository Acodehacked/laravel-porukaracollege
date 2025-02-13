<?php

use App\Http\Controllers\Common\ImageUploaderController;
use App\Http\Controllers\CourseController;
use App\Http\Controllers\EventController;
use App\Http\Controllers\HompageController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\WebcodeController;
use App\Http\Resources\EventResource;
use App\Models\Course;
use App\Models\Event;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

Route::get('/', function () {
    $events = Event::orderByDesc('date')->groupBy()->limit(100)->get();
    return Inertia::render('Welcome',[
        'events'=>EventResource::collection(Event::orderByDesc('date')->get())
    ]);
});

Route::get('admin/dashboard', function () {
    return Inertia::render('Dashboard', [
        'courses' => Course::all(),
        'events' => EventResource::collection(Event::orderByDesc('date')->get())
    ]);
})->middleware(['auth'])->name('dashboard');
// publicShow
Route::get('/Course/{slug}',[CourseController::class,'publicShow']);
Route::get('/Course', function(){
    return Inertia::render('Common/Courses/Index',[
        'courses' => Course::all()
    ]);
})->name('course');
Route::get('/Administration/FYUGProgrammes',[HompageController::class,'fyugprogrammes']);
Route::get('/AboutCollege',[HompageController::class,'aboutcollege']);
Route::get('/AboutCollege/OurPatron',[HompageController::class,'ourpatron']);
Route::get('/AboutCollege/Principal',[HompageController::class,'principal']);
Route::get('/AboutCollege/EducationPolicyStatement',[HompageController::class,'educationpolicy']);
Route::get('/AboutCollege/Founder',[HompageController::class,'founder']);
Route::get('/AboutCollege/Management',[HompageController::class,'management']);
Route::get('/Administration/OurTorchBearers',[HompageController::class,'torch']);
Route::get('/Administration/Faculty',[HompageController::class,'faculty']);
Route::get('/RulesRegulations',[HompageController::class,'rulesregulations']);
Route::get('/StudentCounselling',[HompageController::class,'studentscounselling']);
Route::get('/LeaveApplication',[HompageController::class,'leaveapplication']);
Route::get('/Activities/NSS',[HompageController::class,'nss']);
Route::get('/Activities',[HompageController::class,'activities']);
Route::get('/Contact',[HompageController::class,'contact']);
Route::get('/Latest-Events',[HompageController::class,'latestevents']);
Route::get('/Announcements',[HompageController::class,'annnouncements']);
Route::get('/AddonCourses',[HompageController::class,'addoncourses']);
Route::get('/Admission',[HompageController::class,'admission']);
Route::get('/Facilities/{facility}',[HompageController::class,'facility']);


Route::get('/api/webcode/form',[WebcodeController::class,'create']);


Route::middleware('auth')->group(function () {
    Route::post('image-upload', [ImageUploaderController::class, 'store'])->name('image.upload');

    Route::get('admin/login',function(){
        return redirect()->to(route('dashboard'));
    });
    Route::get('admin',function(){
        return redirect()->to(route('dashboard'));
    });
    Route::get('admin/courses', [CourseController::class, 'index'])->name('admincourses.index');
    Route::get('admin/courses/create', [CourseController::class, 'create'])->name('admincourses.create');
    Route::post('admin/courses', [CourseController::class, 'store'])->name('admincourses.store');
    Route::put('admin/courses/{id}', [CourseController::class, 'update'])->name('admincourses.update');
    Route::get('admin/courses/{id}', [CourseController::class, 'show'])->name('admincourses.show');
    Route::delete('admin/courses/{id}', [CourseController::class, 'destroy'])->name('admincourses.destroy');

    Route::get('admin/events', [EventController::class, 'index'])->name('adminevents.index');
    Route::post('admin/events', [EventController::class, 'store'])->name('adminevents.store');
    Route::get('admin/events/create', [EventController::class, 'create'])->name('adminevents.create');
    Route::get('admin/events/{id}', [EventController::class, 'show'])->name('adminevents.show');
    Route::delete('admin/events/{id}', [EventController::class, 'destroy'])->name('adminevents.destroy');
    Route::put('admin/events/{id}', [EventController::class, 'update'])->name('adminevents.update');



    Route::get('admin/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('admin/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('admin/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

require __DIR__ . '/auth.php';
