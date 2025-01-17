<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventResource;
use App\Models\Event;
use Illuminate\Http\Request;
use Inertia\Inertia;

class HompageController extends Controller
{
    //
    public function fyugprogrammes(){
        return Inertia::render('Common/Administration/Fyug');
    }
    public function aboutcollege(){
        return Inertia::render('Common/About/AboutCollege');
    }
    public function ourpatron(){
        return Inertia::render('Common/About/OurParton');
    }
    public function principal(){
        return Inertia::render('Common/Administration/OurPrincipal');
    }
    public function educationpolicy(){
        return Inertia::render('Common/Administration/EducationPolicy');
    }
    public function founder(){
        return Inertia::render('Common/About/Founder');
    }
    public function management(){
        return Inertia::render('Common/Administration/Management');
    }
    public function torch(){
        return Inertia::render('Common/Administration/Torch');
    }
    public function faculty(){
        return Inertia::render('Common/Administration/Faculty');
    }
    public function rulesregulations(){
        return Inertia::render('Common/About/RulesRegulations');
    }
    public function studentscounselling(){
        return Inertia::render('Common/About/StudentsCounselling');
    }
    public function leaveapplication(){
        return Inertia::render('Common/About/LeaveApplication');
    }
    public function nss(){
        return Inertia::render('Common/About/Activities/Nss');
    }
    public function activities(){
        return Inertia::render('Common/About/Activities/Index');
    }
    public function contact(){
        return Inertia::render('Common/About/Contact');
    }
    public function latestevents(){
        $announcents = Event::where('event_type','Events')->orderByDesc('date')->get();
        return Inertia::render('Common/Events/LatestEvents',[
            'latestevents'=>EventResource::collection($announcents)
        ]);
    }
    public function annnouncements(){
        $announcents = Event::where('event_type','Announcement')->orderByDesc('date')->get();
        return Inertia::render('Common/Events/Announcements',[
            'announcements'=>EventResource::collection($announcents)
        ]);
    }
    public function addoncourses(){
        return Inertia::render('Common/About/AddonCourses');
    }
    public function admission(){
        return Inertia::render('Common/Admission/Admission');
    }
    public function facility($facility){
        $fac = ['library','computerlab','canteen','seminarhall','chapel'];
        if(in_array($facility,$fac)){
            return Inertia::render('Common/Administration/Facility', [
                'facility' => $facility
            ]);
        }
    }
}
